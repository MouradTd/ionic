import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminService } from 'src/app/services';
import { DateTimePage } from '../date-time/date-time.page';

@Component({
  selector: 'app-add-student-modal',
  templateUrl: './add-student-modal.page.html',
  styleUrls: ['./add-student-modal.page.scss'],
})
export class AddStudentModalPage implements OnInit  {

  classes: any[] = [];
  
  first_name: string = '';
  last_name: string = '';
  email: string = '';
  phone: string = '';
  sexe: string = '';
  birthdate: string = '';
  classe_id: string = '';

  constructor(private modalController: ModalController,private adminService: AdminService) {}
  async ngOnInit(): Promise<void> {
    await this.adminService.getClasses().then((response) => {
      this.classes = response.data.classes;
      console.log(this.classes);
      
      
    });
  }
  
  closeModal() {
    this.modalController.dismiss(this.birthdate);
  }

  dismiss() {
    this.modalController.dismiss();
  }

  addStudent() {
    console.log('Adding student:', this.first_name, this.email, this.phone, this.sexe, this.birthdate, this.last_name);
    // Dismiss the modal after adding the student
    this.modalController.dismiss({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone_no: this.phone,
      sexe: this.sexe,
      birthdate: this.birthdate,
    });
  }
  async openModal() {
    const modal = await this.modalController.create({
      component: DateTimePage
    });

    modal.onDidDismiss().then((dataReturned:any) => {
      if (dataReturned !== null) {
        this.birthdate = dataReturned.data;
      }
    });

    return await modal.present();
  }

}
