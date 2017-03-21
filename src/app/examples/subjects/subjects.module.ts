import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectsRoutingModule } from './subjects-routing.module';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ],
  declarations: [AutocompleteComponent]
})
export class SubjectsModule { }
