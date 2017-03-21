import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DataOverTimeComponent} from "./dataOverTime/dataOverTime.component";
import {DataOverTimePipelineComponent} from "./dataOverTimePipeline/dataOverTimePipeline";
import {DataOverTimeCancelComponent} from "./dataOverTimeCancel/dataOverTimeCancel";

const routes: Routes = [
  {path:'overtime', component:DataOverTimeComponent, data:[{title:'Over Time'}]},
  {path:'overtime-cancel', component:DataOverTimeCancelComponent, data:[{title:'Over Time With Cancel'}]},
  {path:'overtime-pipeline', component:DataOverTimePipelineComponent, data:[{title:'Over Time pipeline'}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroModuleRouting{ }
