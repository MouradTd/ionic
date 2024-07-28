import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services';
import { TitleService } from 'src/app/utils';

@Component({
  selector: 'app-allseance',
  templateUrl: './allseance.page.html',
  styleUrls: ['./allseance.page.scss'],
})
export class AllseancePage implements OnInit {

  seances: any;
  constructor(private titleService:TitleService,private adminService:AdminService) { }

  async ngOnInit() {
    this.titleService.changeTitle('les Seance d\'aujourdhui');
    await this.adminService.getSeances().then((response) => {
      // console.log(response.data.classe);
      this.seances = response.data.seances;
      
      
    });
  }

}
