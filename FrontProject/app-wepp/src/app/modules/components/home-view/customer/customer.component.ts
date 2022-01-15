import { Component, OnInit } from '@angular/core';
import { Custumer } from "./custumer";
import { CustomerService } from "./customer.service";



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {


  custumer: Custumer[] = [];    

  constructor(private custumerService: CustomerService) {


  }

  ngOnInit(): void {

    this.custumer = this.custumerService.getCoutumers();
    
  }

}
