import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllseancePage } from './allseance.page';

const routes: Routes = [
  {
    path: '',
    component: AllseancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllseancePageRoutingModule {}
