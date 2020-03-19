import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'rkt-orbit-plot',
  template: `<div class="label">{{ orbit | number }}km</div>`,
  styleUrls: ['./orbit-plot.component.scss']
})
export class OrbitPlotComponent implements OnInit {
  /** Orbit in km */
  @Input() orbit: number = 0;

  /** Planet radius in km */
  @Input() planetSize: number = 0;

  @HostBinding('style.left')
  @HostBinding('style.right')
  public get horizontalOffset() {
    return -(this.orbit * Math.PI) + 'px';
  }

  @HostBinding('style.top')
  public get topOffset() {
    return (-this.orbit) + 'px';
  }

  @HostBinding('style.bottom')
  public get bottomOffset() {
    return (this.planetSize * -0.43) - this.orbit + 'px';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
