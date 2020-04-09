import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '@shared/providers';
import { ToastrService } from 'ngx-toastr';
import { Email } from '@shared/models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private emailService: EmailService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  public sendEmail() {
    let email = this.getEmailFromForm();

    this.emailService.send(email).subscribe(
      response => {
        this.toastr.success('Email enviado com sucesso!');
        this.cleanForm();
      },
      error => {
        this.toastr.error(error.error);
      }
    );
  }

  private cleanForm(){
    this.form.reset();
  }

  private getEmailFromForm(): Email {
    return new Email(
      this.form.controls.email.value,
      this.form.controls.subject.value,
      this.form.controls.messsage.value
    );
  }

}

