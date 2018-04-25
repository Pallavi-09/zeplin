import { TestBed, inject } from '@angular/core/testing';

import { JsonserviceService } from './jsonservice.service';

describe('JsonserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonserviceService]
    });
  });

  it('should be created', inject([JsonserviceService], (service: JsonserviceService) => {
    expect(service).toBeTruthy();
  }));
});
