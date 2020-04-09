import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmailService } from '@shared/providers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  constructor(
    private emailService: EmailService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  public sendEmail(){
    
  }

}

