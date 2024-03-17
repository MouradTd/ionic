import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomePageRoutingModule } from './welcome-routing.module';

import { WelcomePage } from './welcome.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: WelcomePage // or whatever component should be loaded
      }
    ])
  ],
  declarations: [WelcomePage]
})
export class WelcomePageModule {}
