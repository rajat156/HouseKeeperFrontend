import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CleanRequestService {

  constructor(private http:HttpClient) { }

  submitRequest(rollon:any,data:any){
    return this.http.post('http://localhost:8087/submitRequest/'+rollon,data);
  }

  countRequest(rollno:any){
    return this.http.get('http://localhost:8087/requestCount/'+rollno);
  }

  getCleanRequestByRollnumber(rollno:any){
    return this.http.get('http://localhost:8087/getCleanRequestByRollnumber/'+rollno)
  }

  getAllClient(){
    return this.http.get('http://localhost:8087/getAllCleanRequest');
  }
}
