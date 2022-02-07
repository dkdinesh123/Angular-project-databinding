import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

export interface Server
{
  id?:number;
  name?:string;
  status?:string;
}

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit 
{


// private servers: {id:number , name: string, status: string}[] = [];

servers: Server[]=[];

  constructor(public service: ServersService) { }

  ngOnInit(): void 
  {
    this.servers = this.service.getServers();
  }

}
