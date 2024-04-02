import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-student-modal',
  templateUrl: './add-student-modal.page.html',
  styleUrls: ['./add-student-modal.page.scss'],
})
export class AddStudentModalPage  {


  
  name: string = '';
  email: string = '';
  phone: string = '';

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

  addStudent() {
    // Implement the logic to add the student using the provided data
    console.log('Adding student:', this.name, this.email, this.phone);
    // Dismiss the modal after adding the student
    this.modalController.dismiss({
      name: this.name,
      email: this.email,
      phone: this.phone
    });
  }

}
