import { Component, OnInit } from '@angular/core';
import {LoginFormData} from "../../models/login.model";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  private loginData: LoginFormData;
  constructor(private authService: AuthService) { }

  loginDataChanged($event: LoginFormData) {
    this.loginData = {...$event};
  }

  login() {
    if(!this.loginData.email || !this.loginData.password) {
      return;
    }
    this.authService.login(this.loginData.email, this.loginData.password)
  }
}
