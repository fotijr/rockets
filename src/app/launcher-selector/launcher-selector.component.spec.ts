import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncherSelectorComponent } from './launcher-selector.component';

describe('LauncherSelectorComponent', () => {
  let component: LauncherSelectorComponent;
  let fixture: ComponentFixture<LauncherSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauncherSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncherSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
