import { Component, OnInit } from '@angular/core';
import { UserService } from '@shared/providers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }


  onSubmit() {
    this.service.sendEmail().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModelsendEmail.reset();
          this.toastr.success('Email enviado', 'Sucesso');
        } else {
          this.toastr.error('Falha de envio', 'Erro');
          }
        },
        err => {
          console.log(err);
        }
    );
  }

}

