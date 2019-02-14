import { ServerService } from './server.service';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  companyList = [];
  isShowCompanyList = false;

  constructor(private serverService: ServerService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        (response) =>
          console.log(response),
        (error) =>
          console.log(error)
      );
  }

  onGet() {
    this.serverService.getServers()
      .subscribe(
        (servers: any[]) => {
          console.log(servers);
          this.servers = servers;
         },
        (error) =>
          console.log(error)
      );
  }

  getCompanyList() {
    this.serverService.getCompanyList()
      .subscribe(
        (companyList: any[]) => {
          console.log(companyList);
          this.companyList = companyList;
        }
      );
  }

  onClickShowCompanyList() {
    this.isShowCompanyList = true;
    this.getCompanyList();
  }

  onClickAddCompany() {
    this.serverService.addCompany(this.companyList)
      .subscribe(
        (response: any) => {
          console.log(response);
        }
      );
  }
  
  onClickRemoveCompany() {
    this.serverService.removeCompany(this.companyList)
    .subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }

  onClickUpdateCompany() {
    this.serverService.updateCompany(this.companyList)
    .subscribe(
      (response: any) => {
        console.log(response);
      }
    );
  }
}
