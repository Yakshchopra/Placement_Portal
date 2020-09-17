import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherCertificationsComponent } from './other-certifications.component';

describe('OtherCertificationsComponent', () => {
  let component: OtherCertificationsComponent;
  let fixture: ComponentFixture<OtherCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
