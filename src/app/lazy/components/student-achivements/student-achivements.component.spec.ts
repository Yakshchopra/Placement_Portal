import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAchivementsComponent } from './student-achivements.component';

describe('StudentAchivementsComponent', () => {
  let component: StudentAchivementsComponent;
  let fixture: ComponentFixture<StudentAchivementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAchivementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
