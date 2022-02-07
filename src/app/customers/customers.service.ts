import { Injectable } from '@angular/core';
import { Customer } from './customer';



@Injectable({
  providedIn: 'root'
})

export class CustomersService {

private customers : Customer[] = [
  {id:1004, name:'Dinesh', email: 'dinesh@gmail.com'},
  {id:1005, name:'Gilchrist', email: 'gil@gmail.com'},
  {id:1006, name:'Sachin', email:'sachin@gmail.com'},
];
 
 


   
constructor() { }
getCustomers()
 {
   return this.customers;
 }

 getCustomer(id:number)
 {
   const customer = this.customers.find(
     (element) =>
     {
     
 return element.id === id;
     }
   );
   return customer;
 }
 
 updateCustomer(id:number, customerInfo: {name:string, email:string})
 {
   console.log(id+'name:email'+customerInfo.name+':'+customerInfo.email);
   const customer = this.getCustomer(id);
   if(customer)
   {
     customer.name=customerInfo.name;
     customer.email = customerInfo.email;
   }
 }
}
