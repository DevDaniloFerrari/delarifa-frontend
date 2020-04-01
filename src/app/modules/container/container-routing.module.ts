import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { InitialPageComponent } from './initial-page/initial-page.component';

const routes: Routes = [
    {
      path: '', component: InitialPageComponent,
      children: [
        {
          path: 'home',
          loadChildren: () => import('./../home/home.module').then(m => m.HomeModule)
        },
        {
          path: 'about',
          loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
        },
        {
          path: 'contact',
          loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule)
        },
        {
          path: 'partnership',
          loadChildren: () => import('../partnership/partnership.module').then(m => m.PartnershipModule)
        },
        {
          path: '**',
          redirectTo: '/home'
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContainerRoutingModule { }