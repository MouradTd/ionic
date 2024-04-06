import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services';
import { TitleService, helpers } from 'src/app/utils';
import { MotifAbsenceModalPage } from '../../utils/motif-absence-modal/motif-absence-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.page.html',
  styleUrls: ['./profile-student.page.scss'],
})
export class ProfileStudentPage implements OnInit {
  student: any;
  selectedFile: File | undefined;
  constructor(
    private titleService: TitleService,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private modalCtrl: ModalController
  ) {}
  async ngOnInit() {
    const studentId = this.route.snapshot.paramMap.get('studentId');
    console.log(studentId);

    this.titleService.changeTitle('Profile Etudiant');
    await this.adminService.getStudent(Number(studentId)).then((response) => {
      this.student = response.data.student;
      console.log(this.student);
    });
  }
  async openModal(absenceId: number) {
    const modal = await this.modalCtrl.create({
      component: MotifAbsenceModalPage,
    });

    modal.onDidDismiss().then(async (dataReturned) => {
      if (dataReturned && dataReturned.data) {
        this.selectedFile = dataReturned.data;
        this.UploadMotif(absenceId, this.selectedFile);
      }
    });

    return await modal.present();
  }

  async UploadMotif(absenceId: number, data: any) {
    const formData = new FormData();
    formData.append('motif', data);
    await this.adminService
          .MotifAbsences(absenceId, formData)
          .then((response) => {
            console.log(response);
          });
  }
   getFileUrl = (attachment: any) => {
    return helpers.baseUrl() + `uploads/motif/${attachment}`;
};
}
