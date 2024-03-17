import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/utils/title';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private titleService: TitleService) { }
  ngOnInit() {
    this.titleService.changeTitle('Welcome');
  }

}
