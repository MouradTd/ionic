import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SceanceTablePage } from './sceance-table.page';

describe('SceanceTablePage', () => {
  let component: SceanceTablePage;
  let fixture: ComponentFixture<SceanceTablePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SceanceTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
