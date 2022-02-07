import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomersService } from './customers.service';




@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[]=[];

  constructor(public service: CustomersService) { }

  ngOnInit(): void 
  {
    this.customers = this.service.getCustomers();
  }


}
