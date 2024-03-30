import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from 'src/app/utils';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.page.html',
  styleUrls: ['./profile-student.page.scss'],
})
export class ProfileStudentPage implements OnInit {

  constructor(private titleService: TitleService,
    private route: ActivatedRoute) {}
  async ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('studentId');
    this.titleService.changeTitle('Profile Etudiant');
  }

}
