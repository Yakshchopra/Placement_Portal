import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackathonComponent } from './hackathon.component';

describe('HackathonComponent', () => {
  let component: HackathonComponent;
  let fixture: ComponentFixture<HackathonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackathonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackathonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
