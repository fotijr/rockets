import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RocketsComponent } from './rockets.component';
import { RouterLinkStubDirective }   from '../../testing';
import { RouterOutletStubComponent } from '../../testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { RocketService } from '../rocket.service';

describe('RocketsComponent', () => {
  let component: RocketsComponent;
  let fixture: ComponentFixture<RocketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        RocketsComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
