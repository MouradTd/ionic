import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotifAbsenceModalPageRoutingModule } from './motif-absence-modal-routing.module';

import { MotifAbsenceModalPage } from './motif-absence-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotifAbsenceModalPageRoutingModule
  ],
  declarations: [MotifAbsenceModalPage]
})
export class MotifAbsenceModalPageModule {}
