import { ParticipateRaffleComponent } from './participate-raffle/participate-raffle.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListRafflesComponent } from './list-raffles/list-raffles.component';


const routes: Routes = [
    { path: '', component: ListRafflesComponent },
    { path: 'participate', component: ParticipateRaffleComponent}
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class RafflesRoutingModule{}