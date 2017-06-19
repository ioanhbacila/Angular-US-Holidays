import { TestBed, inject } from '@angular/core/testing';

import { HolidayServiceService } from './holiday-service.service';

describe('HolidayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayServiceService]
    });
  });

  it('should be created', inject([HolidayServiceService], (service: HolidayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
