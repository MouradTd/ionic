import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllseancePage } from './allseance.page';

describe('AllseancePage', () => {
  let component: AllseancePage;
  let fixture: ComponentFixture<AllseancePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllseancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
