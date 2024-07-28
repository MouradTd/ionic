import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllclassesPage } from './allclasses.page';

describe('AllclassesPage', () => {
  let component: AllclassesPage;
  let fixture: ComponentFixture<AllclassesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllclassesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
