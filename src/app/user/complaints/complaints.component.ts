import { Component, OnInit } from '@angular/core';
import {FeedbackService} from '../../service/feedback.service';
@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {

  data:any;
  rollnumber=190783;
  constructor(private feedbackService:FeedbackService){
  }

  submitFeedback(data:any){
    this.feedbackService.submitFeedback(data).subscribe((item)=>{
      console.log(item);
    })
  }

  ngOnInit(): void {
    if(localStorage.getItem('loginidp')){
      console.log('hello');
    }
     this.data= localStorage.getItem('loginidpass');
     console.log(this.data);
  }
}
