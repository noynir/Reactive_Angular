import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {DataOverTimeComponent} from "./dataOverTime/dataOverTime.component";
import {DataOverTimePipelineComponent} from "./dataOverTimePipeline/dataOverTimePipeline";
import {DataOverTimeCancelComponent} from "./dataOverTimeCancel/dataOverTimeCancel";
import {IntroModuleRouting} from "./introModule.routing";



@NgModule({
    imports: [CommonModule,IntroModuleRouting],
    exports: [],
    declarations: [DataOverTimeComponent,DataOverTimePipelineComponent,DataOverTimeCancelComponent],
    providers: [],
})
export class IntroModule { }
