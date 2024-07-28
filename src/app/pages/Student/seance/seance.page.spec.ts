import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeancePage } from './seance.page';

describe('SeancePage', () => {
  let component: SeancePage;
  let fixture: ComponentFixture<SeancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
