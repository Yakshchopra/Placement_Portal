import { TestBed } from '@angular/core/testing';

import { FacultyGuard } from './faculty.guard';

describe('FacultyGuard', () => {
  let guard: FacultyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FacultyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
