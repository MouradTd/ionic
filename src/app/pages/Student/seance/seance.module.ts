import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeancePageRoutingModule } from './seance-routing.module';

import { SeancePage } from './seance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeancePageRoutingModule
  ],
  declarations: [SeancePage]
})
export class SeancePageModule {}
