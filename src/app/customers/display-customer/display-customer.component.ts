import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Customer } from '../customer';

import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-display-customer',
  templateUrl: './display-customer.component.html',
  styleUrls: ['./display-customer.component.css']
})

  export class DisplayCustomerComponent implements OnInit 
  {
  
  customer : Customer= {};
  customerId!: number;
    constructor(public service: CustomersService,public router:Router,
      public aRoute:ActivatedRoute) { }
  
    ngOnInit(): void 
    {
       this.customerId! = +this.aRoute.snapshot.params['id'];
      // console.log("Received Server id:"+this.customerId)
      // this.customer =this.service.getCustomer(this.customerId)!;
      this.aRoute.params.subscribe(
        (param:Params)=>
        {
          this.customerId= +param['id'];
           this.customer = this.service.getCustomer(this.customerId)!;
           console.log(this.customer.name+':'+this.customer.email)
          //  this.customer = this.service.getCustomer(+param['id'])!;
        }
        );
   
    }
  
    onEditServer()
    {
      // this.router.navigate(['/customers',this.customer.id,'edit']);
      this.router.navigate(['edit'],{relativeTo:this.aRoute})
  
    }
  
  }
  