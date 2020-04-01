import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnershipComponent } from './partnership/partnership.component';
import { PartnershipRoutingModule } from './partnership-routing.module';


@NgModule({
  declarations: [PartnershipComponent],
  imports: [
    CommonModule,
    PartnershipRoutingModule
  ]
})
export class PartnershipModule { }
