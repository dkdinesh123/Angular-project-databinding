import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus!: boolean;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.loginStatus = this.auth.loggedIn;
  }

  onLogin()
  {
    this.auth.login();

  }
  onLogout()
  {
    this.auth.logout();
  }


}
