import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingShoulderStrapComponent } from './counting-shoulder-strap.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
import {MatDividerModule} from "@angular/material/divider";

const routes: Routes = [
  {
    path: '',
    component: CountingShoulderStrapComponent
  },
];


@NgModule({
  declarations: [
    CountingShoulderStrapComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
  ]
})
export class CountingShoulderStrapModule { }
