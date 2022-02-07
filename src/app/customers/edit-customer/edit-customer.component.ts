import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../customer';

import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {


  customer: Customer = {};
  customerName!: string;
  customerEmail!: string;
  customerId!:number;
 
  
  constructor(public service: CustomersService,
    public aRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    
    this.customerId = +this.aRoute.snapshot.params['id'];
    // this.customer = this.service.getCustomer(this.customerId);
    // this.server = this.service.getServer(1003)!;
    
    this.aRoute.params.subscribe((params:Params)=>
    {
      this.customer = this.service.getCustomer(+params['id'])!;
      console.log(this.customer.name);
      this.customerName  = this.customer.name!;
      this.customerEmail = this.customer.email!;
      
    }); //call back function //asynchronous fn:
    
   
  
  }

  updateCustomer()
  {
    this.service.updateCustomer(this.customer.id!, {name:this.customerName, email:this.customerEmail});
    this.router.navigate(['customers',this.customerId]);
  }


}
