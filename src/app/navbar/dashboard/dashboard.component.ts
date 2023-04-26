import { Component } from '@angular/core';
import {CleanRequestService} from '../../service/clean-request.service';
import {RegStuServiceService} from '../../service/reg-stu-service.service';
import { Router } from '@angular/router';
import {LoginServiceService} from '../../service/login-service.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  AllClientRequestData:any=[];
  AdminDetails:any;
  AdminId:any;
  constructor(private loginService:LoginServiceService,private route:Router,private ClientService:CleanRequestService,private studentService:RegStuServiceService){
    if(!localStorage.getItem('AdminLoginId')){
      this.route.navigateByUrl('/Adminlogin')
    }
    this.AdminId=localStorage.getItem('AdminLoginId');
     this.loginService.getAdminById(this.AdminId).subscribe((item)=>{
      this.AdminDetails=item;
      this.ClientService.getAllClient(this.AdminDetails.hostel).subscribe((item)=>{
        this.AllClientRequestData=item;
      })
     })
  }

}
