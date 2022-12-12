import { TestBed } from '@angular/core/testing';

import { WordPlayService } from './wordplay.service';

describe('WordPlayService', () => {
  let service: WordPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
