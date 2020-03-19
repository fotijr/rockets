import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitPlotComponent } from './orbit-plot.component';

describe('OrbitPlotComponent', () => {
  let component: OrbitPlotComponent;
  let fixture: ComponentFixture<OrbitPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrbitPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrbitPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
