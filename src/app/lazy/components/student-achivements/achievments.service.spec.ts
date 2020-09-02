import { TestBed } from '@angular/core/testing';

import { AchievmentsService } from './achievments.service';

describe('AchievmentsService', () => {
  let service: AchievmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
