import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit() {
  }

  onStart() {
    setInterval(
      () => {
        this.count++;
        console.log(this.count);
      }, 1000
    );
  }

}
