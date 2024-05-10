import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/services';
import { DateTimePage } from '../date-time/date-time.page';

@Component({
  selector: 'app-add-sceance-modal',
  templateUrl: './add-sceance-modal.page.html',
  styleUrls: ['./add-sceance-modal.page.scss'],
})
export class AddSceanceModalPage implements OnInit {

  classes: any[] = [];
  profs: any[] = [];
  heur_debut: string = '';
  heur_fin: string = '';
  nom: string = '';
  salle: string = '';
  date: string = '';
  classe_id: string = '';
  prof_id: string = '';

  constructor(private modalController: ModalController,private adminService: AdminService) {}
  async ngOnInit(): Promise<void> {
    await this.adminService.getClasses().then((response) => {
      this.classes = response.data.classes;
      console.log(this.classes); 
    });
    await this.adminService.getProfs().then((response) => {
      this.profs = response.data.profs;
      console.log(this.profs); 
    });
  }
  
  closeModal() {
    this.modalController.dismiss(this.date);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  addSceance() {
    console.log('Adding Sceance:', this.heur_debut, this.heur_fin, this.nom, this.salle, this.date, this.classe_id, this.prof_id);
    // Dismiss the modal after adding the student
    this.modalController.dismiss({
      heur_debut: this.heur_debut,
      heur_fin: this.heur_fin,
      nom: this.nom,
      salle: this.salle,
      date: this.date,
      classe_id: this.classe_id,
      prof_id: this.prof_id
    });
  }
  
  async openModal() {
    const modal = await this.modalController.create({
      component: DateTimePage
    });

    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned !== null) {
        this.date = dataReturned.data;
      }
    });

    return await modal.present();
  }
}
