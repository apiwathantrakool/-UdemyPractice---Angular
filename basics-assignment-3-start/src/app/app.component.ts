import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detail: String = 'Hello World';
  showDetail: Boolean = false;
  count = 0;
  countList = [];

  onClick() {
    this.count++;
    this.countList.push(this.count);
    this.showDetail = !this.showDetail;
    console.log(this.count);
  }
}
