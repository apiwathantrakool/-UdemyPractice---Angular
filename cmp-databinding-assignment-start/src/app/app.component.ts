import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumberList: number[] = [];
  evenNumberList: number[] = [];

  getCount(countEmit: number) {
    if (countEmit % 2 === 0) {
      this.evenNumberList.push(countEmit);
    } else {
      this.oddNumberList.push(countEmit);
    }
  }
}
