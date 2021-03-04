import { TestBed } from '@angular/core/testing';

import { UserRuoliService } from './user-ruoli.service';

describe('UserRuoliService', () => {
  let service: UserRuoliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRuoliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
