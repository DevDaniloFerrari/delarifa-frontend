import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Providers
import {
  UserService
} from '@shared/providers';

//Components
import {
  RaffleComponent
} from '@shared/components';
import { CurriculumComponent } from './components/curriculum/curriculum.component'

@NgModule({
  declarations: [RaffleComponent, CurriculumComponent],
  entryComponents: [RaffleComponent],
  exports: [RaffleComponent],
  imports: [
    CommonModule,
    NgbModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        UserService
      ]
    }
  }
}