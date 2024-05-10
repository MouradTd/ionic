import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SceanceTablePageRoutingModule } from './sceance-table-routing.module';

import { SceanceTablePage } from './sceance-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SceanceTablePageRoutingModule
  ],
  declarations: [SceanceTablePage]
})
export class SceanceTablePageModule {}
