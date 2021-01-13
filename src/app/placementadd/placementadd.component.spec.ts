import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementaddComponent } from './placementadd.component';

describe('PlacementaddComponent', () => {
  let component: PlacementaddComponent;
  let fixture: ComponentFixture<PlacementaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
