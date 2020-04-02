import { Router, NavigationExtras, NavigationEnd } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Raffle } from '@shared/models';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.css']
})
export class RaffleComponent implements OnInit {

  @Input() public raffle: Raffle;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  public participate() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "raffle": JSON.stringify(this.raffle),
      }
    };
    this.router.navigate(['raffles/participate'], navigationExtras);
  }

}
