import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileClassePageRoutingModule } from './profile-classe-routing.module';

import { ProfileClassePage } from './profile-classe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileClassePageRoutingModule
  ],
  declarations: [ProfileClassePage]
})
export class ProfileClassePageModule {}
