import { TestBed } from '@angular/core/testing';

import { BackendMockUpService } from './backend-mock-up.service';

describe('BackendMockUpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendMockUpService = TestBed.get(BackendMockUpService);
    expect(service).toBeTruthy();
  });
});
