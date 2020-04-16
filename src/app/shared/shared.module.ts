import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Providers
import {
  UserService, RaffleService, EmailService, PartnershipService
} from '@shared/providers';

//Components
import {
  RaffleComponent, CurriculumComponent, PartnershipComponent
} from '@shared/components';



@NgModule({
  declarations: [RaffleComponent, CurriculumComponent, PartnershipComponent],
  entryComponents: [RaffleComponent],
  exports: [RaffleComponent, PartnershipComponent, CurriculumComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        UserService, PartnershipService, EmailService, RaffleService
      ]
    };
  }
}