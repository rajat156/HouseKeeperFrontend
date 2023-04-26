import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegHouseKeeperServiceService {

  constructor(private http:HttpClient) { }

  url:string='http://localhost:8087/';
  registerHousekeeper(data:any,hostel:any){
   return this.http.post(this.url+'registerWorker/'+hostel,data)
  }

  getHouseKeeperByFloor(data:any,hostel:any){
    return this.http.get(this.url+'getHouseKeeperByFloor/'+data+'/'+hostel);
  }
}
