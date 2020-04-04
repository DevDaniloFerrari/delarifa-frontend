import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public token;
  public link = 'Login';
  public route = 'login';
  public showRegister = '';
  constructor() { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    if (this.token != null) {
      this.link = 'Logout';
      this.route = 'logout';
      this.showRegister = 'd-none';
    }
  }

}
