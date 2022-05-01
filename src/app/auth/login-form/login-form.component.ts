import {ChangeDetectionStrategy, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {filter, Subscription} from "rxjs";
import {LoginFormData} from "../../models/login.model";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: LoginFormComponent
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit, OnDestroy {
  @Output()
  loginData = new EventEmitter<LoginFormData>();

  loginForm: FormGroup;

  private subscription: Subscription;
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  get email(): AbstractControl {
    return this.loginForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.loginForm.controls['password'];
  }

  ngOnInit() {
    this.subscription = this.loginForm.valueChanges
      .pipe(filter(_ => this.loginForm.valid))
      .subscribe((data: LoginFormData) => this.loginData.emit(data))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
