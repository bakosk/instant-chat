import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {
  Auth,
  GoogleAuthProvider,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth, private router: Router) { }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signUp(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  googleLogin(): Promise<UserCredential> {
     return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
