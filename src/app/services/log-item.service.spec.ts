import { TestBed } from '@angular/core/testing';

import { LogItemService } from './log-item.service';

describe('LogItemService', () => {
  let service: LogItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
