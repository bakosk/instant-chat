import { Component } from '@angular/core';
import {LoginFormData} from "../../models/login.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {

  signUpError: string = '';

  private currentLoginData: LoginFormData = {email: '', password: ''};
  constructor(private authService: AuthService, private router: Router) { }

  loginDataChanged($event: LoginFormData) {
    this.signUpError = '';
    this.currentLoginData = {...$event};
  }

  registerUser() {
    if(!this.currentLoginData.email || !this.currentLoginData.password) {
      this.signUpError = 'Provide email and password';
      return;
    }
    this.authService.signUp(this.currentLoginData.email, this.currentLoginData.password)
      .then(creds => {
        console.log('sign up succesfull, creds: ', creds);
        this.router.navigate(['']);
      })
      .catch(err => {
        console.log('sign up failed, reason: ', err);
        this.signUpError = 'Signup failed, try again';
      });
  }
}
