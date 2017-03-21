import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClickStreamComponent} from "./ClickStream/clickStream.component";
import {OperatorsRoutingModule} from "./operators.routing";
import {CombineClickStreamComponent} from "./Combining/combineClicksStream.component";
import {ClickTimingComponent} from "./Timing/clickTiming.component";
import {BufferedLoggerComponent} from "./BufferedLogger/bufferedLogger";

@NgModule({
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ],
  declarations: [ClickStreamComponent,CombineClickStreamComponent,ClickTimingComponent,BufferedLoggerComponent]
})
export class OperatorsModule { }
