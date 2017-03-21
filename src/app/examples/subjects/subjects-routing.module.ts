import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AutocompleteComponent} from "./autocomplete/autocomplete.component";

const routes: Routes = [
  {path:'autoComplete', component:AutocompleteComponent, data:[{title:'Autocomplete'}]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SubjectsRoutingModule { }
