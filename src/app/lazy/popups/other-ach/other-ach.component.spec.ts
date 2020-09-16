import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherAchComponent } from './other-ach.component';

describe('OtherAchComponent', () => {
  let component: OtherAchComponent;
  let fixture: ComponentFixture<OtherAchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherAchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherAchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
