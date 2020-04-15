import { SharedModule } from '@shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CurriculumComponent } from '@shared/components';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ],
  entryComponents: [CurriculumComponent]
})
export class AboutModule { }
