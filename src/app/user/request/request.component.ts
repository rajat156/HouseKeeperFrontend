import { Component } from '@angular/core';
import{CleanRequestService} from '../../service/clean-request.service';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  constructor(private cleanService:CleanRequestService){}
  submitRequest(data:any){
    console.log(data);

    this.cleanService.submitRequest(983733,data).subscribe((item)=>{
      
    });
  }
}
