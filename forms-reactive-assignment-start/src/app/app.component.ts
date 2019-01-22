import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataInputs: FormGroup;
  statusOptions = ['Stable', 'Critical', 'Finished'];
  forbiddennNameList = ['Test', 'test'];
  forbiddennEmailList = ['test@test.com', 'TEST@TEST.COM'];
  nameListForAsync = ['cat', 'dog'];
  ngOnInit() {
    this.dataInputs = new FormGroup({
      'name': new FormControl(null, [ Validators.required, this.forbiddennNames.bind(this) ], this.forbiddennNamesAsync.bind(this) ),
      'email': new FormControl(null, [ Validators.required, Validators.email, this.forbiddennEmails.bind(this) ]),
      'status': new FormControl('Critical')
    });
  }

  onSubmit() {
    console.log(this.dataInputs);
    // Can get the errors by using following...
    console.log(this.dataInputs.get('name').getError('required'));
    console.log(this.dataInputs.get('name').getError('nameIsForbidden'));
    console.log(this.dataInputs.get('name').getError('nameIsForbiddenAsync'));
  }

  forbiddennNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddennNameList.indexOf(control.value) !== -1) {
      return {'nameIsForbidden' : true};
    }
    return null;
  }

  forbiddennEmails(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddennEmailList.indexOf(control.value) !== -1) {
      return {'emailIsForbidden' : true};
    }
    return null;
  }

  forbiddennNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (this.nameListForAsync.indexOf(control.value) !== -1) {
              resolve({'nameIsForbiddenAsync': true});
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
