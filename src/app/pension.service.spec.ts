import { TestBed } from '@angular/core/testing';

import { PensionService } from './pension.service';

describe('PensionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PensionService = TestBed.get(PensionService);
    expect(service).toBeTruthy();
  });
});
