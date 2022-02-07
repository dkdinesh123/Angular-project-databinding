import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
@Input() account!:{name:string,status:string};
@Input() id!:number;  
// @Output() statusChanged = new EventEmitter<{id:number, updatedStatus: string}>();
constructor(public service:AccountService) { }

  ngOnInit(): void {
  }

onSetTo(status:string)
{
  this.service.updateStatus(this.id,status);

// this.statusChanged.emit({
//   id:this.id,
//   updatedStatus:status
// });
// console.log("Account Status has been Changed,new status: " +status);
}

}
