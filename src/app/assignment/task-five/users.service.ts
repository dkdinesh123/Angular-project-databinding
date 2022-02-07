import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
activeUsers = ['Dhoni','Dravid','Dinesh'];
inactiveUsers = ['Clark','Adam','Gilchrist'];
  

constructor(public cService:CounterService) { }

setToActive(id: number)
{

this.activeUsers.push(this.inactiveUsers[id]);
this.inactiveUsers.splice(id,1)
this.cService.incrementInActiveToActive();
}

setToInActive(id: number)
{
  this.inactiveUsers.push(this.activeUsers[id]);
  this.activeUsers.splice(id,1)
  this.cService.incrementActiveToInactive();
  
}

}