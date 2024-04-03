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
  role:any = localStorage.getItem('role');

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
  isHourBetween(startHour: string, endHour: string) {
    var now = new Date();
    
    var [startHourPart, startMinutePart] = startHour.split(':').map(Number);
    var start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), startHourPart, startMinutePart, 0);

    var [endHourPart, endMinutePart] = endHour.split(':').map(Number);
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endHourPart, endMinutePart, 0);

    if (start > end) {
      end.setDate(end.getDate() + 1);
    }

    return now >= start && now <= end;
  }

}
