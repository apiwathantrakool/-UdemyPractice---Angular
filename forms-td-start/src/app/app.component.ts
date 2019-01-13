import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('dataForm') dataForm: NgForm;
  defaultDataInput = {
    username: 'Nekky',
    email: 'example@mail.com',
    secret: 'pet'
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(dataForm: NgForm) {
    console.log(dataForm );
    console.log(this.dataForm );
  }
}
