import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilSeancePageRoutingModule } from './profil-seance-routing.module';

import { ProfilSeancePage } from './profil-seance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilSeancePageRoutingModule
  ],
  declarations: [ProfilSeancePage]
})
export class ProfilSeancePageModule {}
