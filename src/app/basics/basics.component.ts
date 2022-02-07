import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  myname = 'Dinesh';
  username='karthik'
  btnFlag = true;
  ngOnInit(): void{
    setTimeout(()=>{
      this.btnFlag = false;
    },3000);
  }
  onclick()
  {
  console.log('onclick function not responds');
}
  constructor() { }

 
}
