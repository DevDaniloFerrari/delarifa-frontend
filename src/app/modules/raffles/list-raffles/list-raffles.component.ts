import { Component, OnInit } from '@angular/core';
import { Raffle, Product, Participant } from '@shared/models';

@Component({
  selector: 'app-list-raffles',
  templateUrl: './list-raffles.component.html',
  styleUrls: ['./list-raffles.component.css']
})
export class ListRafflesComponent implements OnInit {

  public raffle = new Raffle();

  constructor() {
    this.raffle.name = "Apple Watch";
    this.raffle.description = "Relógio inteligênte da Apple";
    this.raffle.participants = new Array<Participant>();
    this.raffle.product = new Product();
    this.raffle.product.image = "https://i.ya-webdesign.com/images/apple-watch-png-3.png";
    this.raffle.unitPrice = 5;
   }

  ngOnInit() {
  }

}
