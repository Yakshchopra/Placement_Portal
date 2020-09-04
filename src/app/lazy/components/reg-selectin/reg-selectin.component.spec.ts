import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSelectinComponent } from './reg-selectin.component';

describe('RegSelectinComponent', () => {
  let component: RegSelectinComponent;
  let fixture: ComponentFixture<RegSelectinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegSelectinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSelectinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
