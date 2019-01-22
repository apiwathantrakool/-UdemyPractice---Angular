import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFormValid = false;
  isSubmitted = false;
  @ViewChild('email') emailRef: NgModel;
  @ViewChild('password') passwordRef: NgModel;
  emailWarningMessage = '';
  passwordWarningMessage = '';
  userData = {
    email: '',
    password: '',
    level: 'Advance'
  };
  submitUserData = {
    email: '',
    password: '',
    level: ''
  };
  levelOptions = [
    'Basic',
    'Advance',
    'Pro'
  ];
  onSubmit(dataForm: NgForm) {
    console.log(dataForm);
    this.isSubmitted = true;
    this.setEmailWarningMessage(this.emailRef);
    this.setPasswordWarningMessage(this.passwordRef);
    this.submitUserData.email = this.userData.email;
    this.submitUserData.password = this.userData.password;
    this.submitUserData.level = this.userData.level;
  }

  setEmailWarningMessage(emailRef: NgModel) {
    if (!emailRef.valid && this.isSubmitted) {
      this.emailWarningMessage = 'Input Email';
    }
    if (!emailRef.valid && this.emailRef.touched) {
      this.emailWarningMessage = 'Invalid Email';
    }
  }

  setPasswordWarningMessage(passwordRef: NgModel) {
    if (!passwordRef.valid && this.isSubmitted) {
      this.passwordWarningMessage = 'Input Password';
    }
    if (!passwordRef.valid && this.passwordRef.touched) {
      this.passwordWarningMessage = 'Invalid Password';
    }
  }
}
