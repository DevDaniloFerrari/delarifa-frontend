import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/providers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public token: string;

  constructor(
    private router: Router,
    private userService: UserService
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
    this.userService.logout(this.token).subscribe(
      (response: any) => {
        if (response.code === 200) {
            localStorage.removeItem('token');
            this.router.navigate(['/home']);
        }
      },
    );
  }

}
