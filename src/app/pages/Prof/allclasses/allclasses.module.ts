import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllclassesPageRoutingModule } from './allclasses-routing.module';

import { AllclassesPage } from './allclasses.page';
import { SharedModule } from 'src/app/utils';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllclassesPageRoutingModule,
    SharedModule
  ],
  declarations: [AllclassesPage]
})
export class AllclassesPageModule {}
