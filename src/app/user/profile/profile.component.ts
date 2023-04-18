import { Component, OnInit } from '@angular/core';
import {RegStuServiceService} from '../../service/reg-stu-service.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  studentData:any;
  constructor(private studentService:RegStuServiceService){
  this.studentService.getStudent(190783).subscribe((item)=>{
    this.studentData=item;
  });
  }

  ngOnInit(): void {
  }
}
