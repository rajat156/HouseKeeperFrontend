import { Component, OnInit } from '@angular/core';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faCreditCardAlt} from '@fortawesome/free-regular-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faAddressBook} from '@fortawesome/free-regular-svg-icons';
import {faRunning} from '@fortawesome/free-solid-svg-icons';
import {faChartBar} from '@fortawesome/free-solid-svg-icons';
import {faChartPie} from '@fortawesome/free-solid-svg-icons';
import {CleanRequestService} from '../service/clean-request.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  AllotIcon:any=faTelegram;
  ComplaintsIcon:any=faCreditCardAlt;
  StudentIcon:any=faUser;
  LogoutIcon:any=faRunning;
  HousekeeperIcon:any=faAddressBook;
  CleanRequestIcon:any=faChartBar;
  ComplaintsDivIcon:any=faChartPie;
  complaintCount:any;
  constructor(private cleanService:CleanRequestService){
    this.cleanService.countRequest(983733).subscribe((item)=>{
      this.complaintCount=item;
    })
  }
  ngOnInit(): void {
      localStorage.setItem('loginidpass','rajat');
  }
  logout(){
    localStorage.removeItem('loginidpass');
  }
}
