import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentTablePage } from './student-table.page';

describe('StudentTablePage', () => {
  let component: StudentTablePage;
  let fixture: ComponentFixture<StudentTablePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
