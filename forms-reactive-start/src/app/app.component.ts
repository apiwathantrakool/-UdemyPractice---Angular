import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        // .bind(this) use if there is call some value "this." inside the function.
        // Because JS will not no who call the value which is inside the called function.
        'username': new FormControl(null, [Validators.required, this.forbiddennNames.bind(this)]),
        'email': new FormControl(null, [ Validators.required, Validators.email ], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([
        new FormControl('Swing'),
        new FormControl('Boxing')
      ])
    });
    this.signupForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
    this.signupForm.statusChanges.subscribe(
      (value) => {
        console.log(value);
      }
    );
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHooby() {
    const control = new FormControl(null, Validators.required);
    // <FormArray> to tell the TS that this value is the FormArray type.
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddennNames(control: FormControl): {[s: string]: boolean} {
    // -1 mean value is not part of forbiddenUsernames.
    // This function call the "this.forbiddenUsernames".
    // So it need to ".bind(this)".
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden' : true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (control.value === 'test@test.com') {
              resolve({'emilIsForbidden': true});
            } else {
              resolve(null);
            }
          }, 1500
        );
      }
    );
    return promise;
  }
}
