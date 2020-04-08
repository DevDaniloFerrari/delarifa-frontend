import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '@shared/providers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./../style/authentication.css'],
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (response: any) => {
        if (response.code === 200) {
			let user = {
				'email': this.service.formModel.value.Email,
				'password' : this.service.formModel.value.Passwords.Password
			};
			this.service.login(user).subscribe(
				(response: any) => {
					if (response.code === 200) {
						localStorage.setItem('token', response.tokenConf.original.access_token);
						this.router.navigateByUrl('/home');
						this.toastr.success('Você está logado.', 'Successo');
					}
				}
			);
		}
      },
      err => {
		    this.toastr.error('Usuário ou senha incorretos, por favor tente novamente.', 'Erro');
      }
    );
  }

}
