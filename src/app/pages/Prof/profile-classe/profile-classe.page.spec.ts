import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileClassePage } from './profile-classe.page';

describe('ProfileClassePage', () => {
  let component: ProfileClassePage;
  let fixture: ComponentFixture<ProfileClassePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileClassePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
