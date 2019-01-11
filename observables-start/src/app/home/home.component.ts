import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs-compat';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNumbers = Observable.interval(1000);
    // myNumbers.subscribe(
    //   (number: number) => {
    //     console.log(number);
    //   }
    // );

// Subscribe with the data and error arguments.
    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(
          () => {
            observer.next('First package');
          }, 2000
        );

        setTimeout(
          () => {
            observer.next('Second package');
          }, 2000
        );

        setTimeout(
          () => {
            observer.error('This does not work');
          }, 2000
        );
      }
    );

    myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('complete'); },
    );


    const myObservable2 = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(
          () => {
            observer.next('First package');
          }, 2000
        );

        setTimeout(
          () => {
            observer.complete();
          }, 2000
        );

        setTimeout(
          () => {
            observer.next('Second package');
          }, 2000
        );
      }
    );

// Subscribe with the data and complete arguments.
    myObservable2.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('complete'); },
    );
  }

}
