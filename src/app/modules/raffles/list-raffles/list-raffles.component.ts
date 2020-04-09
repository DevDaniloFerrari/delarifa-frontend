import { Component, OnInit } from '@angular/core';
import { Raffle } from '@shared/models';
import { RaffleService } from '@shared/providers';

@Component({
  selector: 'app-list-raffles',
  templateUrl: './list-raffles.component.html',
  styleUrls: ['./list-raffles.component.css']
})
export class ListRafflesComponent implements OnInit {

  public raffles: Array<Raffle>;


  constructor(
    private raffleService: RaffleService
  ) { }

  ngOnInit() {
    this.getRaffles();
  }

  private getRaffles() {
    this.raffleService.getAll().subscribe(
      response => {
        this.raffles = response;
      }
    );
  }

}
