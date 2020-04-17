import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/providers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public token: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getToken();
  }

  private getToken() {
    this.token = localStorage.getItem('token');
  }

  public login() {
    this.router.navigate(['/login']);
  }

  public logout() {
    console.log(this.token);
    this.userService.logout(this.token).subscribe(
      (response: any) => {
        if (response.code === 200) {
            localStorage.removeItem('token');
            this.token = undefined;
            this.router.navigate(['/home']);
            this.toastr.success('Deslogado com sucesso.', 'Successo');
        }
      },
    );
  }

}
