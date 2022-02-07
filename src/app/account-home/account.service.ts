import { Injectable } from '@angular/core';
import { LoggingService } from '../logging.service';

// @Injectable()
@Injectable({
  providedIn: 'root'
})
export class AccountService {
 private accounts= [
    {name:'Major Account', status: 'active'},
    // {name:'Minor Account', status: 'inactive'},
    // {name:'Child Account', status: 'hidden'},
  ]
  constructor(public logService:LoggingService) { }
  getAccounts()
  {
    return this.accounts;
  }
addAccount(accname:string,accstatus: string)
{
  this.accounts.push({
    name: accname,
    status:accstatus
  });
  
  // console.log("Account status has been changed,new status" +accstatus);
this.logService.logStatusChange(accstatus);

}



updateStatus(id:number, accstatus: string)
{
  this.accounts[id].status = accstatus;
  this.logService.logStatusChange(accstatus);
}

}
