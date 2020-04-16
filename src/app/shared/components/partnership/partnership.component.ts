import { Partnership } from './../../models/partnership';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {

  @Input() public partnership: Partnership;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }



}
