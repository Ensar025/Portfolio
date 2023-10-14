import { TestBed } from '@angular/core/testing';

import { FloatingLogosService } from './floating-logos.service';

describe('FloatingLogosService', () => {
  let service: FloatingLogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloatingLogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
