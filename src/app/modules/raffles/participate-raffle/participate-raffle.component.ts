import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Raffle } from '@shared/models';

@Component({
  selector: 'app-participate-raffle',
  templateUrl: './participate-raffle.component.html',
  styleUrls: ['./participate-raffle.component.css']
})
export class ParticipateRaffleComponent implements OnInit {

  public raffle: Raffle;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getParameters();
  }

  private getParameters(){
    this.raffle = new Raffle();
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.raffle = JSON.parse(params["raffle"]);
      }
    );
  }

}
