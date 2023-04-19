import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CleanRequestService} from '../../service/clean-request.service';
import {RegHouseKeeperServiceService} from '../../service/reg-house-keeper-service.service';
@Component({
  selector: 'app-allot',
  templateUrl: './allot.component.html',
  styleUrls: ['./allot.component.css']
})
export class AllotComponent {

  requestId:any;
  cleanRequestData:any;
  houseKeeper:any;
  constructor(private route:ActivatedRoute,private cleanService:CleanRequestService,private housekeeperService:RegHouseKeeperServiceService){
  
    this.requestId=this.route.snapshot.paramMap.get('id');

    this.cleanService.getRequestById(this.requestId).subscribe((item)=>{
      this.cleanRequestData=item;
    })

    this.housekeeperService.getHouseKeeperByFloor(2).subscribe((item)=>{
      this.houseKeeper=item;
    })
    
  }
}
