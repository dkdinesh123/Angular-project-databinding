import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
  numbers = [1,2,3,4,5,6,7,8,9,10];
  onlyOdd = false;
  onlyEven = false;
  oddnumbers = [1,3,5,7,9];
  evennumbers = [2,4,6,8,10];
  oddFlag = false;
  evenFlag =false;
  choice!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
