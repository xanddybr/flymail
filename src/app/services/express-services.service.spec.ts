import { TestBed } from '@angular/core/testing';

import { ExpressServicesService } from './express-services.service';

describe('ExpressServicesService', () => {
  let service: ExpressServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
