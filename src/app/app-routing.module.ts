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
import {FormsModule} from '@angular/forms'

const routes: Routes = [
  {path:'login',component:LoginComponent},
  { path:'admin/home', component:DashboardComponent },
  { path:'',redirectTo:"login",pathMatch:"full" },
  {path:'admin/allot', component:AllotComponent},
  {path:'admin/allot/:id',component:AllotComponent},
  {path:'admin/registerStudent', component:RegisterstudentComponent},
  {path:'admin/registerHousekeeper',component:RegisterHousekeeperComponent},
  {path:'user/home',component:UserdashboardComponent},
  {path:'user/request',component:RequestComponent},
  {path:'user/complaints',component:ComplaintsComponent},
  {path:'user/profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class AppRoutingModule { }
