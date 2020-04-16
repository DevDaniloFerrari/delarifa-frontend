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
      confirmEmail: ['', Validators.compose([Validators.email, Validators.required])], //campo novo
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      maritalStatus: ['', Validators.required], //campo novo
      address: this.formBuilder.group({ //campo novo
        street: ['', Validators.required], //campo novo
        number: ['', Validators.required], //campo novo
        state: ['', Validators.required], //campo novo
        city: ['', Validators.required], //campo novo
        country: ['', Validators.required], //campo novo
        neighborhood: ['', Validators.required], //campo novo
        postalCode: ['', Validators.required] //campo novo
      }),
      homePhone: ['', Validators.required], //campo novo
      cellPhone: ['', Validators.required], //campo novo 
      birthDate: ['', Validators.required], //campo novo
      gender: ['', Validators.required] //campo novo
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

    let value = this.form.value;

    //ToDo-Lucas
    //Instanciar e retornar um novo User com as novas propriedades 

    return null;

    // return new User(
    //   value.fullName,
    //   value.birthDate,
    //   value.gender,
    //   value.email,
    //   value.email
    // )
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
