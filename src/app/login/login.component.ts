import { Component } from '@angular/core';
import {faBowlFood} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logo = faBowlFood;
  adminLoginImage:string='assets/images/AdminLogin.jpg';
}
