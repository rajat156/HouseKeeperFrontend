import { Component } from '@angular/core';
import {CleanRequestService} from '../../service/clean-request.service';
import {RegStuServiceService} from '../../service/reg-stu-service.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  AllClientRequestData:any=[];
  constructor(private ClientService:CleanRequestService,private studentService:RegStuServiceService){
    this.ClientService.getAllClient().subscribe((item)=>{
      this.AllClientRequestData=item;
    })
  }

}
