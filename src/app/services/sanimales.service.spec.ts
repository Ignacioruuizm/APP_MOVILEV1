import { TestBed } from '@angular/core/testing';

import { SAnimalesService } from './sanimales.service';

describe('SAnimalesService', () => {
  let service: SAnimalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAnimalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
