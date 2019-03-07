import { TestBed } from '@angular/core/testing';

import { FormularService } from './formular.service';

describe('FormularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormularService = TestBed.get(FormularService);
    expect(service).toBeTruthy();
  });
});
