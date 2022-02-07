import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  users:string[] = [];
  constructor(public service:UsersService) { }

  ngOnInit(): void {
    this.users = this.service.inactiveUsers;
  }

  onSetToactive(id:number)
  {
   this.service.setToActive(id);
  }

}
