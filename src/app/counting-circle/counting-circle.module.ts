import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingCircleComponent } from './counting-circle.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CountingCircleComponent
  },
];


@NgModule({
  declarations: [
    CountingCircleComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class CountingCircleModule { }
