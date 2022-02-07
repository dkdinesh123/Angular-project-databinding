import { Injectable } from '@angular/core';
import { Server } from './servers.component';
// import { Customer, CustomersComponent } from '../customers/customers.component';

@Injectable({
  providedIn: 'root'
})

export class ServersService {

  // private servers: Server[]=[];

private servers: Server[] = [
  {id:1001, name:'Production server', status: 'online'},
  {id:1002, name:'Development server', status: 'offline'},
  {id:1003, name:'Testing server', status: 'offline'},
];



  
constructor() { }
 getServers()
  {
    return this.servers;
  }
 
  getServer(id:number)
  {
    const server = this.servers.find(
      (element) =>
      {
      
  return element.id === id;
      }
    );
    return server;
  }
  
  updateServer(id:number, serverInfo: {name:string, status:string})
  {
    const server = this.getServer(id);
    if(server)
    {
      server.name=serverInfo.name;
      server.status = serverInfo.status;
    }
  }



}
