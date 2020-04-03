import { Component, OnInit } from '@angular/core';
import { Raffle, Product, Participant } from '@shared/models';

@Component({
  selector: 'app-list-raffles',
  templateUrl: './list-raffles.component.html',
  styleUrls: ['./list-raffles.component.css']
})
export class ListRafflesComponent implements OnInit {

  public raffle = new Raffle();
  public raffle2 = new Raffle();


  constructor() {
    this.raffle.name = "Apple Watch";
    this.raffle.description = "Relógio inteligênte da Apple";
    this.raffle.participants = new Array<Participant>();
    for (let index = 0; index < 20; index++) {
      this.raffle.participants.push(new Participant());
    }
    this.raffle.product = new Product();
    this.raffle.product.image = "https://i.ya-webdesign.com/images/apple-watch-png-3.png";
    this.raffle.unitPrice = 5;
    this.raffle.maximumParticipants = 20;

    this.raffle2.name = "MacBook";
    this.raffle2.description = "Notebook Apple | Intel Core I5 1.4 GHZ | 8GB | 256 GB SSD";
    this.raffle2.participants = new Array<Participant>();
    for (let index = 0; index < 500; index++) {
      this.raffle2.participants.push(new Participant());
    }
    this.raffle2.product = new Product();
    this.raffle2.product.image = "https://i.ytimg.com/vi/V7pce4nrR4c/maxresdefault.jpg";
    this.raffle2.unitPrice = 10;
    this.raffle2.maximumParticipants = 500;
  }


  ngOnInit() {
  }

}
