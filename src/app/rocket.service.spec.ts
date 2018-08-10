import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RocketService } from './rocket.service';

describe('RocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [RocketService]
    });
  });

  it('should be created', inject([RocketService], (service: RocketService) => {
    expect(service).toBeTruthy();
  }));
});
