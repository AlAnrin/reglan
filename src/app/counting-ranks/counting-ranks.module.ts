import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountingRanksComponent } from './counting-ranks.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: CountingRanksComponent
  },
];

@NgModule({
  declarations: [
    CountingRanksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CountingRanksModule { }
