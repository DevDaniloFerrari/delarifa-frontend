import { PartnershipComponent } from './partnership/partnership.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    { path: '', component: PartnershipComponent }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})


export class PartnershipRoutingModule{}