import { Component } from '@angular/core';
import {faBowlFood} from '@fortawesome/free-solid-svg-icons';
import {LoginServiceService} from '../service/login-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {

  logo = faBowlFood;
  adminLoginImage:string='assets/images/Login.avif';
  userId:any;
  notMatch:any;

  constructor(private loginService:LoginServiceService,private route:Router){
    if(localStorage.getItem('UserLoginId')){
      this.route.navigateByUrl('/user/home');
    }
  }
  checkUser(data:any){
    if(localStorage.getItem('UserLoginId')){
      this.route.navigateByUrl('/user/home')
    }
    this.loginService.checkUser(data).subscribe((item)=>{
       this.userId=item;
        localStorage.setItem('UserLoginId',this.userId.rollnumber);
      this.route.navigateByUrl('/user/home')
    },(error)=>{
      this.notMatch='Invalid Login Details';

      setInterval(()=>{
        this.notMatch='';
      },3000)
    })
  }

}
