import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [LoginComponent, RegistrationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
