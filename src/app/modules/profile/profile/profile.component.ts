import { User } from '@shared/models';
import { UserService } from '@shared/providers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService) { }

  public profile: User;

  ngOnInit() {
    this.getUser();
  }

  private getUser() {
    let token = localStorage.getItem('token');
    this.userService.getProfile(token).subscribe(
      response => {
        this.profile = response;
      });
  }

}
