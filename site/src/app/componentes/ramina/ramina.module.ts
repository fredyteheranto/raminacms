import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaminaRoutingModule } from './ramina-routing.module';
import { RaminaComponent } from './ramina.component';


@NgModule({
  imports: [
    CommonModule,
    RaminaRoutingModule
  ],
  declarations: [RaminaComponent]
})
export class RaminaModule { }
