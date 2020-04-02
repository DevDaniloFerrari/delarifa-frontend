import { Component, OnInit, Input } from '@angular/core';
import { Raffle } from '@shared/models';

@Component({
  selector: 'app-raffle',
  templateUrl: './raffle.component.html',
  styleUrls: ['./raffle.component.css']
})
export class RaffleComponent implements OnInit {

  @Input() public raffle: Raffle;

  constructor() { }

  ngOnInit() {
  }

}
