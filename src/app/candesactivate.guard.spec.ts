import { TestBed } from '@angular/core/testing';

import { CandesactivateGuard } from './candesactivate.guard';

describe('CandesactivateGuard', () => {
  let guard: CandesactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandesactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
