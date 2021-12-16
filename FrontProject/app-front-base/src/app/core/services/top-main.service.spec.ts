import { TestBed } from '@angular/core/testing';

import { TopMainService } from './top-main.service';

describe('TopMainService', () => {
  let service: TopMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
