import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services';
import { TitleService } from 'src/app/utils';

@Component({
  selector: 'app-seance',
  templateUrl: './seance.page.html',
  styleUrls: ['./seance.page.scss'],
})
export class SeancePage implements OnInit {
  seances: any;
  constructor(private titleService:TitleService,private studentService:StudentService) { }

  async ngOnInit() {
    this.titleService.changeTitle('les Seance d\'aujourdhui');
    await this.studentService.getTodaysSeances().then((response) => {
      // console.log(response.data.classe);
      this.seances = response.data.seances;
      
      
    });
  }

}
