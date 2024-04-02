import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TitleService } from 'src/app/utils';
import { AddStudentModalPage } from '../../utils/add-student-modal/add-student-modal.page';
import { Router } from '@angular/router';
import { Gesture, GestureController } from '@ionic/angular';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.page.html',
  styleUrls: ['./student-table.page.scss'],
})
export class StudentTablePage implements OnInit {
  students = [
    {
      id: 1,
      name: 'Mohamed',
      email: '',
      phone: '',
    },
    {
      id: 2,
      name: 'Ahmed',
      email: '',
      phone: '',
    },
    {
      id: 3,
      name: 'Ali',
      email: '',
      phone: '',
    },
    {
      id: 4,
      name: 'Khalid',
      email: '',
      phone: '',
    },
    {
      id: 5,
      name: 'Hassan',
      email: '',
      phone: '',
    },
  ];
  constructor(
    private titleService: TitleService,
    private modalController: ModalController,
    private router: Router,
    private gestureCtrl: GestureController
  ) {}

  ngOnInit() {
    this.titleService.changeTitle('Etudiants');
    this.setupSwipeGesture();
  }

  async openAddStudentModal() {
    const modal = await this.modalController.create({
      component: AddStudentModalPage,
      cssClass: 'add-student-modal',
    });
    modal.onDidDismiss().then((data) => {
      if (data && data.data) {
        // Add the new student to the list
        this.students.push(data.data);
      }
    });
    return await modal.present();
  }
  setupSwipeGesture() {
    const elements = document.getElementsByClassName('.ion-card');
    [...Array.from(elements)].forEach((element) => {
      const gesture: Gesture = this.gestureCtrl.create({
        el: element,
        gestureName: 'swipeToDelete',
        onStart: (ev) => {
          console.log('Swipe gesture started.');
        },
        onMove: (ev) => {
          console.log('Swipe gesture moved.');
        },
        onEnd: (ev) => {
          console.log('Swipe gesture ended.');
          const targetCard = ev.event.target as HTMLIonCardElement;
          if (
            targetCard &&
            targetCard.dataset['studentId'] &&
            ev.deltaX > 100
          ) {
            console.log('Delete student:', targetCard.dataset['studentId']);
            this.deleteStudent(parseInt(targetCard.dataset['studentId'], 10));
          }
        },
      });
      gesture.enable();
    });
  }

  deleteStudent(studentId: number) {
    // Find index of the student with the given id
    const index = this.students.findIndex(
      (student) => student.id === studentId
    );
    if (index !== -1) {
      // Remove the student from the array
      this.students.splice(index, 1);
    }
  }

  goToProfile(studentId: number) {
    this.router.navigate(['profile-student', studentId]);
  }
}
