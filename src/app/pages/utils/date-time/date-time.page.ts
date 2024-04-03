import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage  {

  date: string= '';

  constructor(private modalCtrl: ModalController) {}

  closeModal() {
    this.modalCtrl.dismiss(new Date(this.date).toISOString().split('T')[0]);
  }
  
  dismiss() {
    this.modalCtrl.dismiss();
  }

}
