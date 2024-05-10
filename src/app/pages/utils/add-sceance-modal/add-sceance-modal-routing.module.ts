import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSceanceModalPage } from './add-sceance-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddSceanceModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSceanceModalPageRoutingModule {}
