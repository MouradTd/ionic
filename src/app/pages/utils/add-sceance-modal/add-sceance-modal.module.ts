import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSceanceModalPageRoutingModule } from './add-sceance-modal-routing.module';

import { AddSceanceModalPage } from './add-sceance-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSceanceModalPageRoutingModule
  ],
  declarations: [AddSceanceModalPage]
})
export class AddSceanceModalPageModule {}
