import { Component } from '@angular/core';
import {faBowlFood} from '@fortawesome/free-solid-svg-icons';
import {LoginServiceService} from '../service/login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logo = faBowlFood;
  adminLoginImage:string='assets/images/Login.avif';
  adminId:any;
  notMatch:any;
  constructor(private loginService:LoginServiceService,private route:Router){
    if(localStorage.getItem('AdminLoginId')){
      this.route.navigateByUrl('/admin/home');
    }
  }
  checkAdmin(data:any){
    if(localStorage.getItem('AdminLoginId')){
      this.route.navigateByUrl('/admin/home')
    }
    this.loginService.checkAdmin(data).subscribe((item)=>{
       this.adminId=item;
        localStorage.setItem('AdminLoginId',this.adminId.admin_id);
      this.route.navigateByUrl('/admin/home')
    },(error)=>{
      this.notMatch='Invalid Login Details';

      setInterval(()=>{
        this.notMatch='';
      },3000)
    })
  }


}
