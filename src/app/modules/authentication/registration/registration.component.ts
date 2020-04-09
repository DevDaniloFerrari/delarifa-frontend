import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '@shared/providers';
import { Router } from '@angular/router';
import { User, Authentication } from '@shared/models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./../style/authentication.css'],
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  public register() {
    if (this.form.valid) {
      let user = this.getUserFromForm();

      this.userService.register(user).subscribe(
        response => {
          let authenticate = this.getAuthenticationFromForm();
          this.authenticate(authenticate);
        },
        error => {
          this.toastr.error(error.error);
        }
      );
    } else {
      this.toastr.warning('Preencha todos os campos necessários');
    }

  }

  private getUserFromForm(): User {
    return new User(
      this.form.controls.fullName.value,
      this.form.controls.email.value,
      this.form.controls.password.value
    );
  }

  private getAuthenticationFromForm(): Authentication {
    return new Authentication(
      this.form.controls.email.value,
      this.form.controls.password.value
    );
  }

  private authenticate(authentication: Authentication) {
    this.userService.authenticate(authentication).subscribe(
      (response: any) => {
        if (response.code === 200) {
          localStorage.setItem('token', response.tokenConf.original.access_token);
          this.router.navigateByUrl('/home');
          this.toastr.success('Você está logado.', 'Successo');
        }
      }
    );
  }
}
