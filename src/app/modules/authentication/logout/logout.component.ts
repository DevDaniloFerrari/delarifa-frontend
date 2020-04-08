import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/providers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  public token;

  constructor(private service: UserService, private router: Router,) { }

  ngOnInit() {
    this.token = localStorage.getItem('token');
    this.service.logout(this.token).subscribe(
      (response: any) => {
        console.log(response)

        if (response.code === 200) {
          localStorage.removeItem('token');
          this.router.navigateByUrl('/home');
        }
      },
    );
  }

}
