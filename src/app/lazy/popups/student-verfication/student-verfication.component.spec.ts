import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentVerficationComponent } from './student-verfication.component';

describe('StudentVerficationComponent', () => {
  let component: StudentVerficationComponent;
  let fixture: ComponentFixture<StudentVerficationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentVerficationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentVerficationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
