import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';

import { LayoutPage } from './layout.page';
import { MenuPageModule } from "../utils/menu/menu.module";
import { HomePageModule } from '../Prof/home/home.module';
import { WelcomePageModule } from '../welcome/welcome.module';

@NgModule({
    declarations: [LayoutPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LayoutPageRoutingModule,
        MenuPageModule,
        HomePageModule, // add this
        WelcomePageModule,
    ]
})
export class LayoutPageModule {}
