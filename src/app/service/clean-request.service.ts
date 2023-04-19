import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CleanRequestService {

  constructor(private http:HttpClient) { }

  url:string='http://localhost:8087/';
  submitRequest(rollon:any,data:any){
    return this.http.post(this.url+'submitRequest/'+rollon,data);
  }

  countRequest(rollno:any){
    return this.http.get(this.url+'requestCount/'+rollno);
  }

  getCleanRequestByRollnumber(rollno:any){
    return this.http.get(this.url+'getCleanRequestByRollnumber/'+rollno)
  }

  getAllClient(){
    return this.http.get(this.url+'getAllCleanRequest');
  }

  getAllCount(){
    return this.http.get(this.url+'getAllCleanRequestCount')
  }

  getRequestById(data:any){
    return this.http.get(this.url+'getRequestById/'+data);
  }
}
