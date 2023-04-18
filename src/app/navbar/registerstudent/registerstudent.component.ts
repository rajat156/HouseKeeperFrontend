import { Component } from '@angular/core';
import {RegStuServiceService} from '../../service/reg-stu-service.service';
@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent {

constructor(private studentService:RegStuServiceService){}
  registerStudent(data:any){
    console.log(data);
    this.studentService.registerStudent(data).subscribe((item)=>{
      console.log(item);
    });
  }
}
