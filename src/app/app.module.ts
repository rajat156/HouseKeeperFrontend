import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    AllotComponent,
    RegisterstudentComponent,
    RegisterHousekeeperComponent,
    LoginComponent,
    UserComponent,
    UserdashboardComponent,
    RequestComponent,
    ComplaintsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
