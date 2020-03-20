import { TestBed } from '@angular/core/testing';

import { MissionPlannerService } from './mission-planner.service';

describe('MissionPlannerService', () => {
  let service: MissionPlannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionPlannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
