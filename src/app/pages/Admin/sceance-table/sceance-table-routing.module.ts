import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceanceTablePage } from './sceance-table.page';

const routes: Routes = [
  {
    path: '',
    component: SceanceTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceanceTablePageRoutingModule {}
