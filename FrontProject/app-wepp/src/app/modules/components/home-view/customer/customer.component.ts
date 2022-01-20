import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) {

  }

  getCoutumers() {
    this.customerService.getCoutumers().subscribe(
      customers => this.customers = customers
    );
  }

  ngOnInit(): void {
    this.getCoutumers();

  }
}
