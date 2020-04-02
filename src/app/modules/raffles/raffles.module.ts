import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ListRafflesComponent } from './list-raffles/list-raffles.component';
import { RafflesRoutingModule } from './raffles-routing.module';



@NgModule({
  declarations: [ListRafflesComponent],
  imports: [
    CommonModule,
    RafflesRoutingModule,
    SharedModule
  ]
})
export class RafflesModule { }
