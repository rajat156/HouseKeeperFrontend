import { Component, OnInit } from '@angular/core';
import {RegStuServiceService} from '../../service/reg-stu-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  studentData:any;
  rollnumber:any;
  constructor(private studentService:RegStuServiceService,private route:Router){
    if(!localStorage.getItem('UserLoginId')){
      this.route.navigateByUrl('/Userlogin');
    }
    this.rollnumber=localStorage.getItem('UserLoginId');
  this.studentService.getStudent(this.rollnumber).subscribe((item)=>{
    console.log(item)
    this.studentData=item;
  });
  }

  ngOnInit(): void {
  }
}
