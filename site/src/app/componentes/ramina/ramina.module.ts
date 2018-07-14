import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaminaRoutingModule } from './ramina-routing.module';
import { RaminaComponent } from './ramina.component';
import { DashboardComponent } from '.././dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    RaminaRoutingModule
  ],
  declarations: [RaminaComponent,DashboardComponent]
})
export class RaminaModule { }
