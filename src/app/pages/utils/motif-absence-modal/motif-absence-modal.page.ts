import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-motif-absence-modal',
  templateUrl: './motif-absence-modal.page.html',
  styleUrls: ['./motif-absence-modal.page.scss'],
})
export class MotifAbsenceModalPage implements OnInit {

  selectedFile: File | undefined;

  constructor(private modalCtrl: ModalController) {}

  fileChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files) {
      this.selectedFile = files[0];
    }
  }

  closeModal() {
    console.log(this.selectedFile);
    
    this.modalCtrl.dismiss(this.selectedFile);
  }
  ngOnInit() {}

}
