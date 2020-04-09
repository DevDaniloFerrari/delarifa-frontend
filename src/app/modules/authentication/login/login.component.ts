import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/providers/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Authenticate } from '@shared/models';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./../style/authentication.css'],
})
export class LoginComponent implements OnInit {

	public form: FormGroup;

	constructor(
		private service: UserService,
		private router: Router,
		private toastr: ToastrService,
		private formBuilder: FormBuilder
	) { }

	ngOnInit() {
		this.verifyUserAlreadyLogged();
		this.buildForm();
	}

	private verifyUserAlreadyLogged(){
		let token = localStorage.getItem('token');
		if (token != null) {
			this.router.navigateByUrl('/home');
		}
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			email: ['', Validators.required],
			password: ['', Validators.required]
		});
	}

	public login() {
		if (this.form.valid) {
			let authenticate = new Authenticate(
				this.form.controls.email.value,
				this.form.controls.password.value
			);

			this.service.authenticate(authenticate).subscribe(
				(response: any) => {
					if (response.code === 200) {
						localStorage.setItem('token', response.tokenConf.original.access_token);
						this.router.navigateByUrl('/home');
						this.toastr.success('Você está logado.', 'Successo');
					}
				},
				err => {
					if (err.status === 401) {
						this.toastr.error('Usuário ou senha incorreta.', 'Falha de autenticação.');
					}
				}
			);
		} else {
			this.toastr.warning('Preencha todos os campos necessários');
		}
	}

}

