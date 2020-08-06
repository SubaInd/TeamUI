import { TestBed } from '@angular/core/testing';

import { EventsInfoService } from './events-info.service';

describe('EventsInfoService', () => {
  let service: EventsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
