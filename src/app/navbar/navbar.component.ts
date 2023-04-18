import { Component } from '@angular/core';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {faCreditCardAlt} from '@fortawesome/free-regular-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faAddressBook} from '@fortawesome/free-regular-svg-icons';
import {faRunning} from '@fortawesome/free-solid-svg-icons';
import {faChartBar} from '@fortawesome/free-regular-svg-icons';
import {faChartPie} from '@fortawesome/free-solid-svg-icons';
import {CleanRequestService} from '../service/clean-request.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  AllCleanRequest:any;
  AllotIcon:any=faTelegram;
  ComplaintsIcon:any=faCreditCardAlt;
  StudentIcon:any=faUser;
  LogoutIcon:any=faRunning;
  HousekeeperIcon:any=faAddressBook;
  CleanRequestIcon:any=faChartBar;
  ComplaintsDivIcon:any=faChartPie;

  constructor(private cleanService:CleanRequestService){
    this.cleanService.getAllCount().subscribe((item)=>{
      this.AllCleanRequest=item;
    })
  }
}
