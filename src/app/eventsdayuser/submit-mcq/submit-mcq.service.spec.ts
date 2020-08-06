import { TestBed } from '@angular/core/testing';

import { SubmitMcqService } from './submit-mcq.service';

describe('SubmitMcqService', () => {
  let service: SubmitMcqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitMcqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
