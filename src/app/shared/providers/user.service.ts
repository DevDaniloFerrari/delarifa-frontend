import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  readonly BaseURI = 'http://localhost:8000/api';

    formModel = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', Validators.email],
      FullName: [''],
      Passwords: this.fb.group({
        Password: ['', [Validators.required, Validators.minLength(4)]],
        ConfirmPassword: ['', Validators.required]
      }, { validators: this.comparePasswords })
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
        email : this.formModel.value.Email,
        name: this.formModel.value.FullName,
        password: this.formModel.value.Passwords.Password
      };
      console.log(body);
      return this.http.post(this.BaseURI + '/register', body);
    }
    
    login(formData) {
      return this.http.post(this.BaseURI + '/login', formData);
    }

    getUserProfile() {
      return this.http.get(this.BaseURI + '/UserProfile');
    }

    logout(token: string) {
		console.log(token)
		let headers = new HttpHeaders({ 
			'Authorization': 'Bearer ' + token,
			'Content-Type': 'application/json'
		 });
      return this.http.post(this.BaseURI + '/logout', { headers: headers });
    }

  }