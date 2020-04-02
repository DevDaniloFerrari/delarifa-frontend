import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

//Providers
import {
  UserService
} from '@shared/providers';

//Components
import {
  RaffleComponent
} from '@shared/components' 

@NgModule({
  declarations: [RaffleComponent],
  entryComponents: [RaffleComponent],
  exports: [RaffleComponent],
  imports: [
    CommonModule
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