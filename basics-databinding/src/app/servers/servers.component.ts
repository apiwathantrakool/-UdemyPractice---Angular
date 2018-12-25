import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  userName = 'Nekky';

  constructor() {
  }

  ngOnInit() {
  }

  onClickButton() {
    this.userName = '';
  }

  isUsernameEmpty() {
    if (this.userName === '') {
      return true;
    } else {
      return false;
    }
  }
}
