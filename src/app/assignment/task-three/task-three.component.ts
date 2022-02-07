import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-three',
  templateUrl: './task-three.component.html',
  styleUrls: ['./task-three.component.css']
})

export class TaskThreeComponent implements OnInit 
{

  showSecret=false;
  logItem:{id:number,timestamp:Date}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

    onToggleDetails()
    {
    this.showSecret= !this.showSecret;
    this.logItem.push({
      id : this.logItem.length+1,
      timestamp: new Date
    });
    }

}
