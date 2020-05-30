import { TestBed } from '@angular/core/testing';

import { ReportDetailedService } from './report-detailed.service';

describe('ReportDetailedService', () => {
  let service: ReportDetailedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportDetailedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
