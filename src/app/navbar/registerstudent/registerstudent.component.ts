import { Component } from '@angular/core';
import {RegStuServiceService} from '../../service/reg-stu-service.service';
import { Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent {

  hostel:any;
constructor(private activateRoute:ActivatedRoute,private route:Router,private studentService:RegStuServiceService){
  if(!localStorage.getItem('AdminLoginId')){
    this.route.navigateByUrl('/Adminlogin');
  }
  this.hostel = this.activateRoute.snapshot.paramMap.get('id');
}
  registerStudent(data:any){
    this.studentService.registerStudent(data,this.hostel).subscribe((item)=>{
      
    });
  }
}
