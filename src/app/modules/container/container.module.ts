import { InitialPageComponent } from './initial-page/initial-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerRoutingModule } from './container-routing.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, InitialPageComponent, NavbarComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule
  ]
})
export class ContainerModule { }
