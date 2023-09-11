import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingSetInSleeveComponent } from './counting-set-in-sleeve.component';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {
    path: '',
    component: CountingSetInSleeveComponent
  },
];

@NgModule({
  declarations: [
    CountingSetInSleeveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ]
})
export class CountingSetInSleeveModule { }
