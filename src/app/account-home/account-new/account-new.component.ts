import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account-new',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css']
})
export class AccountNewComponent implements OnInit {
// @Output() createAccount = new EventEmitter<{name:string, status:string}>();

  constructor(public service: AccountService) { }

  ngOnInit(): void 
  {

  }
    
  onCreateAccount(aName:string, aStatus:string)
    {
      this.service.addAccount(aName,aStatus)
      // this.createAccount.emit({
      //   name:aName,
      //   status:aStatus
      // });
      console.log('Account status Has been changed, new status: '+aStatus);
    }

}

