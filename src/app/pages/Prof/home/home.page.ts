import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/utils/title';
import { ProfService } from 'src/app/services';
import { helpers } from 'src/app/utils';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: any;
  kpis: any;
  absences: any;
  constructor(private titleService: TitleService,private profService: ProfService) {}
  async ngOnInit() {
    this.user = {};
    this.titleService.changeTitle('Home');
    await this.profService.stats().then((response) => {
      console.log(response.data);
      this.kpis = response.data;
      
    });
    await this.profService.getLatestAbsences().then((response) => {
      console.log(response.data);
      this.absences = response.data.absences;
      
    });
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  getFileUrl = (attachment: any) => {
    return helpers.baseUrl() + `uploads/motif/${attachment}`;
};
}
