import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultySidebarComponent } from './faculty-sidebar.component';

describe('FacultySidebarComponent', () => {
  let component: FacultySidebarComponent;
  let fixture: ComponentFixture<FacultySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
