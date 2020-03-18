import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionPlannerComponent } from './mission-planner.component';

describe('MissionPlannerComponent', () => {
  let component: MissionPlannerComponent;
  let fixture: ComponentFixture<MissionPlannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionPlannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
