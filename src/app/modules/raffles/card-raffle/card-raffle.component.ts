import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '@shared/models';

@Component({
  selector: 'app-card-raffle',
  templateUrl: './card-raffle.component.html',
  styleUrls: ['./card-raffle.component.css']
})
export class CardRaffleComponent implements OnInit {

  @Input() public participants: Array<Participant>;

  constructor() { }

  ngOnInit() {
  }

}
