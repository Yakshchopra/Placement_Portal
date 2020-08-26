import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsformComponent } from './detailsform.component';

describe('DetailsformComponent', () => {
  let component: DetailsformComponent;
  let fixture: ComponentFixture<DetailsformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
