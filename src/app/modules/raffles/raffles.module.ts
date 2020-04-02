import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ListRafflesComponent } from './list-raffles/list-raffles.component';
import { RafflesRoutingModule } from './raffles-routing.module';
import { ParticipateRaffleComponent } from './participate-raffle/participate-raffle.component';
import { CardRaffleComponent } from './card-raffle/card-raffle.component';



@NgModule({
  declarations: [ListRafflesComponent, ParticipateRaffleComponent, CardRaffleComponent],
  imports: [
    CommonModule,
    RafflesRoutingModule,
    SharedModule
  ]
})
export class RafflesModule { }
