import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {

accounts:{name:string,status:string}[] = [
  // {name:'Major Account', status: 'active'},
  // {name:'Minor Account', status: 'inactive'},
  // {name:'Child Account', status: 'hidden'},
]
// service = new AccountService();

  constructor(public service: AccountService) { }

  ngOnInit(): void {

    this.accounts = this.service.getAccounts();
  }


// methods
  onAccountAdded(newAccount:{name:string,status:string})
  {
    this.service.addAccount(newAccount.name,newAccount.status);
    // this.accounts.push(newAccount);
  }
  // onStatusChanged(updateAccount:{id:number, updatedStatus:string})
  // {
  //   this.accounts[updateAccount.id].status = updateAccount.updatedStatus;
  // }
}
