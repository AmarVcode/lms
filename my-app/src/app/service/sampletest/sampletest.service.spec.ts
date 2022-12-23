import { TestBed } from '@angular/core/testing';

import { SampletestService } from './sampletest.service';

describe('SampletestService', () => {
  let service: SampletestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SampletestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
