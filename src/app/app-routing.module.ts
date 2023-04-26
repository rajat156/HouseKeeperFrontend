import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './navbar/dashboard/dashboard.component';
import { AllotComponent } from './navbar/allot/allot.component';
import { RegisterstudentComponent } from './navbar/registerstudent/registerstudent.component';
import { RegisterHousekeeperComponent } from './navbar/register-housekeeper/register-housekeeper.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { RequestComponent } from './user/request/request.component';
import { ComplaintsComponent } from './user/complaints/complaints.component';
import { ProfileComponent } from './user/profile/profile.component';
import {FormsModule} from '@angular/forms';
import { LoginUserComponent } from './login-user/login-user.component';
import { FeedbackComponent } from './navbar/feedback/feedback.component';

const routes: Routes = [
  {path:'Adminlogin',component:LoginComponent},
  { path:'admin/home', component:DashboardComponent },
  { path:'',redirectTo:"Adminlogin",pathMatch:"full" },
  {path:'admin/allot/:id/:hostel',component:AllotComponent},
  {path:'admin/registerStudent/:id', component:RegisterstudentComponent},
  {path:'admin/registerHousekeeper/:id',component:RegisterHousekeeperComponent},
  {path:'user/home',component:UserdashboardComponent},
  {path:'user/request',component:RequestComponent},
  {path:'user/complaints/:id',component:ComplaintsComponent},
  {path:'user/profile',component:ProfileComponent},
  {path:'Userlogin',component:LoginUserComponent},
  {path:'admin/feedback/:id',component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
