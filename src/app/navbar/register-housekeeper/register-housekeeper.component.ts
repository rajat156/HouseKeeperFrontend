import { Component } from '@angular/core';
import {RegHouseKeeperServiceService} from '../../service/reg-house-keeper-service.service';
@Component({
  selector: 'app-register-housekeeper',
  templateUrl: './register-housekeeper.component.html',
  styleUrls: ['./register-housekeeper.component.css']
})
export class RegisterHousekeeperComponent {

  constructor(private houseKeeperService:RegHouseKeeperServiceService){}

  registerHousekeeper(data:any){
    this.houseKeeperService.registerHousekeeper(data).subscribe((item)=>{
      
    })
  }
}
