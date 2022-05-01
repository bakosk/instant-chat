import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";

import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
