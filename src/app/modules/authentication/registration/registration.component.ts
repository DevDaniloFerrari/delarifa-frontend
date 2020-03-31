import { UserService } from '../../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./../authentication.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('Novo usuário cadastrado!', 'Sucesso.');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Usuário já cadastrado.', 'Falha.');
                break ;
              default:
                this.toastr.error(element.description, 'Falha.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
      );
    }

  }
