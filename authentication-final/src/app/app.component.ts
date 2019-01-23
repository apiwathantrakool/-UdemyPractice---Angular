import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDaSYxGAc5Sw572HMeaNnK8gY08k2qfwE8',
      authDomain: 'angular-training-d4693.firebaseapp.com',
      databaseURL: 'https://angular-training-d4693.firebaseio.com',
      projectId: 'angular-training-d4693',
      storageBucket: 'angular-training-d4693.appspot.com',
      messagingSenderId: '970324111494'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
