import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:55755/api';

    formModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      FullName: [''],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
      }, { validators: this.comparePasswords })
    });
 
    formModelsendEmail = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      Message: ['', Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(100),
        Validators.required
      ])]

    });



    comparePasswords(fb: FormGroup) {
      const confirmPswrdCtrl = fb.get('ConfirmPassword');
      if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
        if (fb.get('Password').value !== confirmPswrdCtrl.value) {
          confirmPswrdCtrl.setErrors({ passwordMismatch: true });
        } else {
          confirmPswrdCtrl.setErrors( null );
        }
      }
    }

    register() {
      const body = {
        UserName: this.formModel.value.UserName,
        Email: this.formModel.value.Email,
        FullName: this.formModel.value.FullName,
        Password: this.formModel.value.Passwords.Password
      };
      return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
    }

    login(formData) {
      return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
    }

    getUserProfile() {
      return this.http.get(this.BaseURI + '/UserProfile');
    }

    sendEmail() {
      const body = {
        UserName: this.formModelsendEmail.value.UserName,
        Email: this.formModelsendEmail.value.Email,
        Message: this.formModelsendEmail.value.Message
      };
      return this.http.post(this.BaseURI + '/ApplicationUser/SendEmail', body);
    }
  }

