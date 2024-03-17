import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/utils/title';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private titleService: TitleService) { }
  ngOnInit() {
    this.titleService.changeTitle('Home');
  }

  test(){
    console.log('test');
  }

}
