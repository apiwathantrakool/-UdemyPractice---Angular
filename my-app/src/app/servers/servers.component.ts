import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreateStatus = 'No server was created';
  serverName = 'Server One way binding';
  serverName02 = 'Server Two way binding';
  isServerCreated = false;
  serverList = ['Testserver1', 'Testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.serverList.push(this.serverName);
    this.serverCreateStatus = 'Server was created';
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
