import { ListPartnershipComponent } from './list-partnership/list-partnership.component';
import { SharedModule } from '@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnershipRoutingModule } from './partnership-routing.module';
import { PartnershipComponent } from '@shared/components';


@NgModule({
  declarations: [ListPartnershipComponent],
  entryComponents: [PartnershipComponent],
  imports: [
    CommonModule,
    PartnershipRoutingModule,
    SharedModule
  ]
})
export class PartnershipModule { }
