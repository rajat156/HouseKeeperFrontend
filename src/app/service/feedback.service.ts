import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { 
  }

  submitFeedback(data:any){
   return  this.http.post('http://localhost:8087/submitFeedback',data);
  }
}
