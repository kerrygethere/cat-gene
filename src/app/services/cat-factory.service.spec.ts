import { TestBed } from '@angular/core/testing';

import { CatFactoryService } from './cat-factory.service';

describe('CatFactoryService', () => {
  let service: CatFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
