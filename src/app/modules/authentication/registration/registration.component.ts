import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '@shared/providers';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./../style/authentication.css'],
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (response: any) => {
        console.log(response)
      },
      err => {
        console.log(err);
      }
    );
  }

}
