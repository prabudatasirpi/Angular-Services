import { Component } from '@angular/core';
import { MyservicesService } from '../services/myservices.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers:[MyservicesService]
})
export class RightComponent {
  constructor(public _myServices: MyservicesService){
    console.log(_myServices.Counter);

  }

  Increase(){
    this._myServices.addOne();
  }
}