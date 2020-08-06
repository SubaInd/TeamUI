import { TestBed } from '@angular/core/testing';

import { UsernominationService } from './usernomination.service';

describe('UsernominationService', () => {
  let service: UsernominationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsernominationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
