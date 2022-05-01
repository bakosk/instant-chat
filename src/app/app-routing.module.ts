import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthModule} from "./auth/auth.module";
import {LoginPageComponent} from "./auth/login-page/login-page.component";
import {SignUpPageComponent} from "./auth/sign-up-page/sign-up-page.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule
  ],
  exports: [RouterModule, AuthModule]
})
export class AppRoutingModule { }
