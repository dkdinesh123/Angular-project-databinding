import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  logStatusChange(status:string)
  {
    console.log("Account status has been changed,new status" +status);
  }
}
