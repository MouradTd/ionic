import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TitleService, helpers } from 'src/app/utils';
import { AddStudentModalPage } from '../../utils/add-student-modal/add-student-modal.page';
import { Router } from '@angular/router';
import { Gesture, GestureController } from '@ionic/angular';
import { AdminService } from 'src/app/services';


@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.page.html',
  styleUrls: ['./student-table.page.scss'],
})
export class StudentTablePage implements OnInit {
  students : any;
  constructor(
    private titleService: TitleService,
    private modalController: ModalController,
    private router: Router,
    private gestureCtrl: GestureController,
    private adminService: AdminService
  ) {}

  async ngOnInit() {
    this.titleService.changeTitle('Etudiants');
    this.setupSwipeGesture();
    await this.adminService.getStudents().then((response) => {
      this.students = response.data.students;
      console.log(this.students);
      
      
    });
  }

  async openAddStudentModal() {
    const modal = await this.modalController.create({
      component: AddStudentModalPage,
      cssClass: 'add-student-modal',
    });
    modal.onDidDismiss().then(async (data) => {
      if (data && data.data) {
        await this.adminService.addStudent(data.data).then((response) => {
          this.students.push(response.data.student);
          console.log(this.students);
        });
        console.log(data.data);
        
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
      (student: { id: number; }) => student.id === studentId
    );
    if (index !== -1) {
      // Remove the student from the array
      this.students.splice(index, 1);
    }
  }

  goToProfile(studentId: number) {
    this.router.navigate(['profile-student', studentId]);
  }
  calculateStudentAge(dateOfBirth: string): number {
    return helpers.calculateAge(dateOfBirth);
  }
}
