import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotifAbsenceModalPage } from './motif-absence-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MotifAbsenceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotifAbsenceModalPageRoutingModule {}
