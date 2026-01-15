import { TestBed } from '@angular/core/testing';

import { Mod8service } from './mod8service';

describe('Mod8service', () => {
  let service: Mod8service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod8service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
