import { Component } from '@angular/core';
import {CleanRequestService} from '../../service/clean-request.service';
@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent {

  cleanRequestData:any=[];
  constructor(private cleanService:CleanRequestService){
    this.cleanService.getCleanRequestByRollnumber(190783).subscribe((item)=>{
      this.cleanRequestData=item;
    })
  }
}
