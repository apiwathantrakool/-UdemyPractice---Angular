import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('dataForm') dataForm: NgForm;
  defaultDataInput = {
    username: 'Nekky',
    email: 'example@mail.com',
    secret: 'pet'
  };

  ngOnInit() {
    // User the console.log(this.dataForm); to see the data schema.
    console.log(this.dataForm);
  }

  settingData() {
    // This way is used for setting all values.
    this.dataForm.setValue({
      userData: {
        username: 'Setting',
        email: '',
      },
      secret: 'pet'
    });
  }

  patchingData() {
    // This way is used for setting some value.
    this.dataForm.form.patchValue({
      userData: {
        username: 'Patching'
      }
    });
  }

  onSubmit(dataForm: NgForm) {
    console.log(dataForm );
    console.log(this.dataForm );
  }
}
