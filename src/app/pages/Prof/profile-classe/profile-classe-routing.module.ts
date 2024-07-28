import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileClassePage } from './profile-classe.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileClassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileClassePageRoutingModule {}
