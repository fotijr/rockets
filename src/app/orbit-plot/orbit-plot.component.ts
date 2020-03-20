import { Component, HostBinding, Input } from '@angular/core';
import { Orbit } from '../models';

@Component({
  selector: 'rkt-orbit-plot',
  templateUrl: './orbit-plot.component.html',
  styleUrls: ['./orbit-plot.component.scss']
})
export class OrbitPlotComponent {

  /** Orbit in km */
  @Input() orbit: Orbit = {altitude: 0, name: 'Loading'};

  /** Planet radius in km */
  @Input() planetSize: number = 0;

  @HostBinding('style.left')
  @HostBinding('style.right')
  public get horizontalOffset() {
    return -((this.orbit.altitude * this.kmToPixelScale) * Math.PI) + 'px';
  }

  @HostBinding('style.top')
  public get topOffset() {
    return (-this.orbit.altitude * this.kmToPixelScale) + 'px';
  }

  @HostBinding('style.bottom')
  public get bottomOffset() {
    return -(this.orbit.altitude * this.kmToPixelScale) + 'px';
  }

  private get kmToPixelScale(): number {
    const scale = +document.documentElement.style.getPropertyValue('--km-to-pixel-scale');
    return scale;
  }

  constructor() { }

}
