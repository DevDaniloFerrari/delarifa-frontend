import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '@shared/providers';
import { Router } from '@angular/router';
import { User, Authentication, MaritalStatus, Gender, Viacep } from '@shared/models';
import { ViacepService } from '@shared/providers/viacep.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  public form: FormGroup;
  public MaritalStatus = MaritalStatus;
  public Gender = Gender;

  public viacep: Viacep;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder,
    private viacepService: ViacepService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      confirmEmail: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      neighborhood: ['', Validators.required],
      postalCode: ['', Validators.required],
      homePhone: ['', Validators.required],
      cellPhone: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required]
    }, { validator: [this.mustMatch('email', 'confirmEmail'), this.mustMatch('password', 'confirmPassword')] });
  }

  private mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
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

    let user = new User(
      value.fullName,
      value.birthDate,
      value.gender,
      value.email,
      value.password,
      value.MaritalStatus,
      value.addres,
      value.homePhone,
      value.cellPhone
    );

    user.password_confirmation = value.confirmPassword;

    return user;
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

  public getViacep() {
    let cep: string = this.form.value.postalCode;

    if (cep == undefined)
      return;

    if (cep.length == 8) {
      this.viacepService.getViacep(cep).subscribe(
        response => {
          this.viacep = response;
          this.form.controls.street.setValue(this.viacep.logradouro);
          this.form.controls.neighborhood.setValue(this.viacep.bairro);
          this.form.controls.city.setValue(this.viacep.localidade);
          this.form.controls.state.setValue(this.viacep.uf);
        }
      );
    }

  }
}
