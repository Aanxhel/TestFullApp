import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  id=0;
  nombre = '';
  apellido='';
  creatAT= '';
  email='';

  constructor() { 

    console.log('customer');

  }

  ngOnInit(): void {
  }

}
