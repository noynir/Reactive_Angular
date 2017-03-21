import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClickStreamComponent} from "./ClickStream/clickStream.component";
import {CombineClickStreamComponent} from "./Combining/combineClicksStream.component";
import {ClickTimingComponent} from "./Timing/clickTiming.component";
import {BufferedLoggerComponent} from "./BufferedLogger/bufferedLogger";

const routes: Routes = [
  {path:'clickStream', component:ClickStreamComponent, data:[{title:'Click Streams'}]},
  {path:'clickStreamCombine', component:CombineClickStreamComponent , data:[{title:'Combining Click Streams'}]},
  {path:'clickStreamTimed', component:ClickTimingComponent , data:[{title:'Click Streams Timing'}]},
  {path:'bufferedLogger', component:BufferedLoggerComponent , data:[{title:'Buffered Logger'}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OperatorsRoutingModule { }


