import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MenuPageModule } from '../../utils/menu/menu.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/utils';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MenuPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage // or whatever component should be loaded
      }
    ]),
    SharedModule
  
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
