import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [ Validators.required, Validators.email ])
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('Swing'),
        new FormControl('Boxing')
      ])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHooby() {
    const control = new FormControl(null, Validators.required);
    // <FormArray> to tell the TS that this value is the FormArray type.
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
}
