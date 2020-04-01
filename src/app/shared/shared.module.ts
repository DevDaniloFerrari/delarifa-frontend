import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

//Providers
import {
  UserService
} from '@shared/providers'

@NgModule({
  declarations: [],
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