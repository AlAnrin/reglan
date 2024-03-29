import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CountingRanksComponent} from './counting-ranks.component';
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {DialogOverviewExampleDialog} from "./save-dialog";

const routes: Routes = [
  {
    path: '',
    component: CountingRanksComponent
  },
];

@NgModule({
  declarations: [
    CountingRanksComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule
  ]
})
export class CountingRanksModule { }
