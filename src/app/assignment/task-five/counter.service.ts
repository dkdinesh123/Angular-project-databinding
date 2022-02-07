import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;


  constructor() { }

  incrementActiveToInactive()
  {

this.activeToInactiveCount++;
console.log('Active to InActive Count is'+ this.activeToInactiveCount)
  }
  incrementInActiveToActive()
  {

    this.inactiveToActiveCount++;
    console.log('InActive to Active Count is'+ this.inactiveToActiveCount);
   }
  }

