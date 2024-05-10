import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/services';
import { TitleService } from 'src/app/utils';
import { AddSceanceModalPage } from '../../utils/add-sceance-modal/add-sceance-modal.page';

@Component({
  selector: 'app-sceance-table',
  templateUrl: './sceance-table.page.html',
  styleUrls: ['./sceance-table.page.scss'],
})
export class SceanceTablePage implements OnInit {
  seances:any[] = [];
  constructor(
    private titleService: TitleService,
    private modalController: ModalController,
    private router: Router,
    private adminService: AdminService
  ) {}

  async ngOnInit() {
    this.titleService.changeTitle('Sceances');
    await this.adminService.getSeances().then((response) => {
      this.seances = response.data.seances;
      console.log(this.seances);
      
      
    });
  }
  async openAddStudentModal() {
    const modal = await this.modalController.create({
      component: AddSceanceModalPage,
      cssClass: 'add-sceance-modal',
    });
    modal.onDidDismiss().then(async (data) => {
      if (data && data.data) {
        await this.adminService.addSeance(data.data).then((response) => {
          this.seances.push(response.data.seance);
          console.log(this.seances);
        });
        console.log(data.data);
        
      }
    });
    return await modal.present();
  }
  goToProfile(seanceId: number) {
    this.router.navigate(['profile-seance', seanceId]);
  }

}
