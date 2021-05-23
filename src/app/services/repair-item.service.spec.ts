import { TestBed } from '@angular/core/testing';

import { RepairItemService } from './repair-item.service';

describe('RepairItemService', () => {
  let service: RepairItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
