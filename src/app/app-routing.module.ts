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
  {
    path: 'set-in',
    loadChildren: () => import('./counting-set-in-sleeve/counting-set-in-sleeve.module')
      .then(m => m.CountingSetInSleeveModule),
  },
  {
    path: 'projects',
    loadChildren: () => import('./open-project/open-project.module')
      .then(m => m.OpenProjectModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
