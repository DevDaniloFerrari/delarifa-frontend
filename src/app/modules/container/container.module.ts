import { InitialPageComponent } from './initial-page/initial-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: InitialPageComponent}
];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, InitialPageComponent, NavbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class ContainerModule { }
