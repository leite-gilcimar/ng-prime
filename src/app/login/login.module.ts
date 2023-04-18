import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgPrimeModule } from './../shared/ng-prime/ng-prime.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [CommonModule, LoginRoutingModule, NgPrimeModule],
})
export class LoginModule {}
