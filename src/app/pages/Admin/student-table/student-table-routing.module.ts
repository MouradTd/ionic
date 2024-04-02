import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentTablePage } from './student-table.page';

const routes: Routes = [
  {
    path: '',
    component: StudentTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentTablePageRoutingModule {}
