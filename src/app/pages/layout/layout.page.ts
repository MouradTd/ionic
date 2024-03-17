import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TitleService } from 'src/app/utils/title';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  title: string="";

  constructor(private titleService: TitleService,private menuController:MenuController) { }

  ngOnInit() {
    this.titleService.currentTitle.subscribe(title => this.title = title);
  }
  openMenu() {
    console.log('open menu');
    
    this.menuController.toggle('main-menu');
  }

}
