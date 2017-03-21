import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimpleSwitchComponent} from "./simple-switch/simple-switch.component";

const routes: Routes = [
  {path:'switch', component:SimpleSwitchComponent, data:[{title:'Simple Switch'}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HigherOrderRoutingModule { }
