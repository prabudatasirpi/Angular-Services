import { Component } from '@angular/core';
import { MyservicesService } from '../services/myservices.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {

  constructor(public _myServices: MyservicesService){
    console.log(_myServices.Counter);
    
  }
}
