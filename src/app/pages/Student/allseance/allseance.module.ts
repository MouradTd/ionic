import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllseancePageRoutingModule } from './allseance-routing.module';

import { AllseancePage } from './allseance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllseancePageRoutingModule
  ],
  declarations: [AllseancePage]
})
export class AllseancePageModule {}
