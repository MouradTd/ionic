import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbsencesPageRoutingModule } from './absences-routing.module';

import { AbsencesPage } from './absences.page';
import { SharedModule } from 'src/app/utils';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbsencesPageRoutingModule,
    SharedModule
  ],
  declarations: [AbsencesPage]
})
export class AbsencesPageModule {}
