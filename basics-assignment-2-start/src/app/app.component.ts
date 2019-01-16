import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  result: string;

  onSubmit() {
    this.result = this.username;
    this.username = '';
  }

  getUsername() {
    return this.result;
  }
}
