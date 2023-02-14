import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'circle',
    loadChildren: () => import('./counting-circle/counting-circle.module')
      .then(m => m.CountingCircleModule),
  },
  {
    path: 'ranks',
    loadChildren: () => import('./counting-ranks/counting-ranks.module')
      .then(m => m.CountingRanksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
