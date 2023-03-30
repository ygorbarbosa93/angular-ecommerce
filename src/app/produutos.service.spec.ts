import { TestBed } from '@angular/core/testing';

import { ProduutosService } from './produutos.service';

describe('ProduutosService', () => {
  let service: ProduutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
