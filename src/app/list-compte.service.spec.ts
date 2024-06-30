import { TestBed } from '@angular/core/testing';

import { ListCompteService } from './list-compte.service';

describe('ListCompteService', () => {
  let service: ListCompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
