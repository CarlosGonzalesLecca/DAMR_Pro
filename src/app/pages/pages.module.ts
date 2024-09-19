import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NopagefoundComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    NopagefoundComponent
  ]
})
export class PagesModule { }
