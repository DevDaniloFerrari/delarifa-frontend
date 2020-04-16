import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListPartnershipComponent } from './list-partnership/list-partnership.component';


const routes: Routes = [
    { path: '', component: ListPartnershipComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class PartnershipRoutingModule{}