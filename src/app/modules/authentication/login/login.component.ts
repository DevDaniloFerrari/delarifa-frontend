import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/providers/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./../style/authentication.css'],
})
export class LoginComponent implements OnInit {

	public token;

	formModel = {
		UserName: '',
		Password: ''
	};
	constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }
		
	ngOnInit() {
		this.token = localStorage.getItem('token');
		if (this.token != null) {
				this.router.navigateByUrl('/home');
		}
	}

	onSubmit(form: NgForm) {
		this.service.login(form.value).subscribe(
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
	}

}

