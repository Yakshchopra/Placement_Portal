import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalCertificationsComponent } from './international-certifications.component';

describe('InternationalCertificationsComponent', () => {
  let component: InternationalCertificationsComponent;
  let fixture: ComponentFixture<InternationalCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
