import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  users:string[] = [];

  constructor(public service:UsersService) { }

  ngOnInit(): void {
    this.users = this.service.activeUsers;
  }

  onSetToInactive(id:number)
  {
   this.service.setToInActive(id);
  }
}
