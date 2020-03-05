import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthmoduleRoutingModule } from './authmodule-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { Http2ServerResponse } from 'http2';


@NgModule({
  declarations: [LoginComponent, SignupComponent, WelcomeComponent],
  imports: [
    CommonModule,
    AuthmoduleRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    // Http2ServerResponse
  ]
})
export class AuthmoduleModule { }
