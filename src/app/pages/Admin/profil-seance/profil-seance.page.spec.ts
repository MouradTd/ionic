import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilSeancePage } from './profil-seance.page';

describe('ProfilSeancePage', () => {
  let component: ProfilSeancePage;
  let fixture: ComponentFixture<ProfilSeancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilSeancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
