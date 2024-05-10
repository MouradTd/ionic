import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/services';
import { TitleService } from 'src/app/utils';

@Component({
  selector: 'app-profil-seance',
  templateUrl: './profil-seance.page.html',
  styleUrls: ['./profil-seance.page.scss'],
})
export class ProfilSeancePage implements OnInit {

  seance: any;
  // students: Students = {} as Students;
  students: any;
  selectedFile: File | undefined;
  constructor(
    private titleService: TitleService,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private modalCtrl: ModalController
  ) {}
  async ngOnInit() {
    const seanceId = this.route.snapshot.paramMap.get('seanceId');

    this.titleService.changeTitle('Profile Seance');
    await this.adminService.getSeancesById(Number(seanceId)).then((response) => {
      this.seance = response.data.seance;
      this.students = response.data.students;
      console.log(this.students);
      
    });
  }
  determineSeanceStatus(date: string, heur_debut: string, heur_fin: string): string {
  const now = new Date();
  const seanceDate = new Date(date);

  if (now < seanceDate) {
    return 'Upcoming';
  } else if (now.toDateString() === seanceDate.toDateString()) {
    const currentTime = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();

    if (currentTime < heur_debut) {
      return 'Upcoming';
    } else if (currentTime > heur_debut && currentTime < heur_fin) {
      return 'In Progress';
    } else {
      return 'Finished';
    }
  } else {
    return 'Finished';
  }
}

}


