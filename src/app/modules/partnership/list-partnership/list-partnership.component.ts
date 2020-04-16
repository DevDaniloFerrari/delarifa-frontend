import { Component, OnInit } from '@angular/core';
import { Partnership } from '@shared/models';
import { PartnershipService } from '@shared/providers';

@Component({
  selector: 'app-list-partnership',
  templateUrl: './list-partnership.component.html',
  styleUrls: ['./list-partnership.component.css']
})
export class ListPartnershipComponent implements OnInit {

  public partnerships: Array<Partnership>;


  constructor(
    private service: PartnershipService
  ) { }

  ngOnInit() {
    this.getPartnership();
  }

  private getPartnership() {
    this.service.getAll().subscribe(
      response => {
        this.partnerships = response;
      }
    );
  }
}
