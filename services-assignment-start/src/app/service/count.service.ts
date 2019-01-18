import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  acToInacCount = 0;
  inacToAcCount = 0;

  constructor() { }

  countAcToInacCount() {
    this.acToInacCount++;
    console.log('Count of changing to Inactivate: ' + this.acToInacCount);
    alert('Count of changing to Inactivate: ' + this.acToInacCount);
  }

  countInacToAcCount() {
    this.inacToAcCount++;
    console.log('Count of changing to Activate: ' + this.inacToAcCount);
    alert('Count of changing to Activate: ' + this.inacToAcCount);
  }

}
