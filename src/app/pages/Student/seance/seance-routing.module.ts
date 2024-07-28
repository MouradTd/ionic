import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeancePage } from './seance.page';

const routes: Routes = [
  {
    path: '',
    component: SeancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeancePageRoutingModule {}
