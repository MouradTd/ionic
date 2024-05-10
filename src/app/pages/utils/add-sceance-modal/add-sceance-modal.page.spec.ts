import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddSceanceModalPage } from './add-sceance-modal.page';

describe('AddSceanceModalPage', () => {
  let component: AddSceanceModalPage;
  let fixture: ComponentFixture<AddSceanceModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddSceanceModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
