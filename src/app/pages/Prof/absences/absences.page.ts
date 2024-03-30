import { Component, OnInit } from '@angular/core';
import { ProfService } from 'src/app/services';
import { TitleService } from 'src/app/utils';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-absences',
  templateUrl: './absences.page.html',
  styleUrls: ['./absences.page.scss'],
})
export class AbsencesPage implements OnInit {
  students: any;
  classe: any;
  seance: any;
  checkedStudents: any[] = [];
  date = new Date(); 
   formattedDate = this.date.toISOString().split('T')[0];
  constructor(private titleService: TitleService,private profService: ProfService,
    private route: ActivatedRoute) {}
  async ngOnInit() {
    const classId = this.route.snapshot.paramMap.get('classeId');
    this.titleService.changeTitle('Absences');
    if (classId) {
      await this.profService.getStudents(Number(classId)).then((response) => {
        console.log(response.data.students);
        this.students = response.data.students;
        this.classe = response.data.classe;
        this.seance = response.data.seance;
      });
    }
  }
   
  onCheckboxChange(id: any) {
    let isChecked = this.checkedStudents.includes(id);
    if (!isChecked) {
      this.checkedStudents.push(id);
    } else {
      this.checkedStudents = this.checkedStudents.filter(studentId => studentId !== id);
    }
    console.log(this.checkedStudents);
  }

  submit = async () => {
    const data = {
      students: this.checkedStudents,
      classe_id: this.classe.id,
      date: this.formattedDate,
      seance_id: this.seance.id,
    };
    console.log(data);
    
    await this.profService.InsertAbsences(data).then((response) => {
      console.log(response);
    });
  }

}
