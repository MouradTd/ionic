import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/app/services';
import { TitleService } from 'src/app/utils';

@Component({
  selector: 'app-allclasses',
  templateUrl: './allclasses.page.html',
  styleUrls: ['./allclasses.page.scss'],
})
export class AllclassesPage implements OnInit {
  classe: any;
  kpis:any;
  role:any = localStorage.getItem('role');
  constructor(private titleService: TitleService,private profService: ProfService) { }

  async  ngOnInit() {
    this.titleService.changeTitle('Toute les Classes');
    await this.profService.getAllClasses().then((response) => {
      // console.log(response.data.classe);
      this.classe = response.data.classe;
      
      
    });
  }

}
