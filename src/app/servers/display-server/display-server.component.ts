import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
 import { Server } from '../servers.component';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-display-server',
  templateUrl: './display-server.component.html',
  styleUrls: ['./display-server.component.css']
})
export class DisplayServerComponent implements OnInit 
{

server : Server = {};
serverId!: number;
  constructor(public service: ServersService,public router:Router,
    public aRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
     this.serverId! = +this.aRoute.snapshot.params['id'];
    // console.log("Received Server id:"+this.serverId)
    this.server =this.service.getServer(this.serverId)!;
    this.aRoute.params.subscribe(
      (param:Params)=>
      {
        this.serverId= +param['id'];
        this.server = this.service.getServer(this.serverId)!;
        // this.server = this.service.getServer(+param['id']) !;
      },
  
      );
 
  }
  onEditServer()
  {
    // this.router.navigate(['/servers',this.serverId]);
    this.router.navigate(['edit'],{relativeTo:this.aRoute})

  }

}
