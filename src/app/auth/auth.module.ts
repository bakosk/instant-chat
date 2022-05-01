import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "../pipes/pipes.module";
import {getAuth, provideAuth} from "@angular/fire/auth";

const components = [
  LoginFormComponent,
  LoginPageComponent,
  SignUpPageComponent
];

@NgModule({
  declarations: [ ...components ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    provideAuth(() => getAuth()),
    PipesModule
  ],
  exports: [ ...components,AngularFireAuthModule ]
})
export class AuthModule { }
