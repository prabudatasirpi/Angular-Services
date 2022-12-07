import { Component } from '@angular/core';
import { MyservicesService } from '../services/myservices.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent {
  
  constructor(public  _myServices: MyservicesService){
    console.log(_myServices.Counter);

  }

  Increase(){
    this._myServices.addOne();
  }



}
