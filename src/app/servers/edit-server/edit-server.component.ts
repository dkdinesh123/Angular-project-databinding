import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Server } from '../servers.component';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {


  server: Server = {};
  serverName!: string ;
  serverStatus!: string ;
  serverId!:number;
  
  constructor(public service: ServersService,
    public aRoute: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.serverId = +this.aRoute.snapshot.params['id'];
    // this.server = this.service.getServer(this.serverId)!;
    // // this.server = this.service.getServer(1003)!;
   
    // this.serverName  != this.server.name;
    // this.serverStatus != this.server.status;
  
    this.aRoute.params.subscribe((params:Params)=>
    {
    this.server = this.service.getServer(+params['id'])!;
      console.log(this.server.name);
      this.serverName  = this.server.name!;
      this.serverStatus = this.server.status!;
    });
  }
  
  updateServer()
  {
    this.service.updateServer (this.server.id !, {name:this.serverName, status:this.serverStatus});
    this.router.navigate(['servers',this.serverId]);
  }


}
