import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListRafflesComponent } from './list-raffles/list-raffles.component';


const routes: Routes = [
    { path: '', component: ListRafflesComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class RafflesRoutingModule{}