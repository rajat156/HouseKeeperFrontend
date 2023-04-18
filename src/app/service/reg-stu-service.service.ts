import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegStuServiceService {

  constructor(private http:HttpClient) { }

  registerStudent(data:any){
    return this.http.post('http://localhost:8087/saveStudent',data);
  }

  getStudent(data:any){
    return this.http.get('http://localhost:8087/getStudent/'+data);
  }

}
