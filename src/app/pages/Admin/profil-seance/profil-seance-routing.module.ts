import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilSeancePage } from './profil-seance.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilSeancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilSeancePageRoutingModule {}
