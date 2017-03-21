import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HigherOrderRoutingModule } from './higher-order-routing.module';
import { SimpleSwitchComponent } from './simple-switch/simple-switch.component';

@NgModule({
  imports: [
    CommonModule,
    HigherOrderRoutingModule
  ],
  declarations: [SimpleSwitchComponent]
})
export class HigherOrderModule { }
