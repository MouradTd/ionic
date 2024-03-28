import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/app/services';
import { TitleService } from 'src/app/utils/title';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {
  classe: any;
  kpis:any;

  constructor(private titleService: TitleService,private profService: ProfService) {}
  async ngOnInit() {
    this.titleService.changeTitle('Classes');
    await this.profService.getClasses().then((response) => {
      // console.log(response.data.classe);
      this.classe = response.data.classe;
      this.kpis = response.data.kpis;
      console.log(this.kpis);
      
      
    });
  }

}
