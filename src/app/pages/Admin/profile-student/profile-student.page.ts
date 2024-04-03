import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services';
import { TitleService } from 'src/app/utils';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.page.html',
  styleUrls: ['./profile-student.page.scss'],
})
export class ProfileStudentPage implements OnInit {
  student:any;
  constructor(private titleService: TitleService,
    private route: ActivatedRoute,private adminService: AdminService) {}
  async ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('studentId');
    console.log(studentId);
    
    this.titleService.changeTitle('Profile Etudiant');
    await this.adminService.getStudent(Number(studentId)).then((response) => {
      this.student = response.data.student;
      console.log(this.student);
    });
  }

}
