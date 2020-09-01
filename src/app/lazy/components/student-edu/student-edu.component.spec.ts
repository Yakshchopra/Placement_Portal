import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEduComponent } from './student-edu.component';

describe('StudentEduComponent', () => {
  let component: StudentEduComponent;
  let fixture: ComponentFixture<StudentEduComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEduComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
