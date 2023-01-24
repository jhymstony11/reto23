import { TestBed } from '@angular/core/testing';

import { UserinterceptorsService } from './userinterceptors.service';

describe('UserinterceptorsService', () => {
  let service: UserinterceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinterceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
