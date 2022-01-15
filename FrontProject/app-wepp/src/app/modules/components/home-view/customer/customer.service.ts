import { Injectable } from '@angular/core';
import { Custumers } from "./custumers.json";
import { Custumer } from "./custumer";



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }


  getCoutumers(): Custumer[]{
    return Custumers;
  }
}
