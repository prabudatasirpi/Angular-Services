import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {

  Counter : number = 10;
  constructor() { }

  addOne(){
    this.Counter++;
  }
}
