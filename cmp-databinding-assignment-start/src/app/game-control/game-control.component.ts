import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  count = 0;
  interval: any;
  @Output() countEmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(
      () => {
        this.count++;
        this.countEmit.emit(this.count);
      }, 1000
    );
  }

  onStop() {
    clearInterval(this.interval);
  }

}
