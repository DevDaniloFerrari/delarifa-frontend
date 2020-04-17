import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '@shared/models';

@Component({
  selector: 'app-card-raffle',
  templateUrl: './card-raffle.component.html',
  styleUrls: ['./card-raffle.component.css']
})
export class CardRaffleComponent implements OnInit {
  toggle = true;

  @Input() public participants: Array<Participant>;

  constructor() {
  }

  ngOnInit() {
  }

  changeColor() {
    this.toggle = !this.toggle;

  }

}
