import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileStudentPage } from './profile-student.page';

describe('ProfileStudentPage', () => {
  let component: ProfileStudentPage;
  let fixture: ComponentFixture<ProfileStudentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
