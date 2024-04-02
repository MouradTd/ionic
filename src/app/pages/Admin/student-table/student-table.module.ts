import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentTablePageRoutingModule } from './student-table-routing.module';

import { StudentTablePage } from './student-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentTablePageRoutingModule
  ],
  declarations: [StudentTablePage]
})
export class StudentTablePageModule {}
