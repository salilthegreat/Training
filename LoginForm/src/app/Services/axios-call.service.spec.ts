import { TestBed } from '@angular/core/testing';

import { AxiosCallService } from './axios-call.service';

describe('AxiosCallService', () => {
  let service: AxiosCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxiosCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
