import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.css']
})
export class TaskTwoComponent implements OnInit {
  userName = '';
  oddnumbers = [1,3,5,7,9];
  evennumbers = [2,4,6,8,10];
  oddFlag = false;
  evenFlag =false;
  constructor() { }

  ngOnInit(): void {
  }

}
