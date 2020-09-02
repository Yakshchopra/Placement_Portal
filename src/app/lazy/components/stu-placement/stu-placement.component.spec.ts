import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuPlacementComponent } from './stu-placement.component';

describe('StuPlacementComponent', () => {
  let component: StuPlacementComponent;
  let fixture: ComponentFixture<StuPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
