import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotifAbsenceModalPage } from './motif-absence-modal.page';

describe('MotifAbsenceModalPage', () => {
  let component: MotifAbsenceModalPage;
  let fixture: ComponentFixture<MotifAbsenceModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MotifAbsenceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
