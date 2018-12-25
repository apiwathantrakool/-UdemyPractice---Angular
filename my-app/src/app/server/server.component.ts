import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: Number = 10;
  serverStatus: String = 'offline';

  constructor() {
    this.serverId = Math.random();
    this.serverId > 0.5 ? this.serverStatus = 'online' : this.serverStatus = 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'red' : 'green';
  }

}
