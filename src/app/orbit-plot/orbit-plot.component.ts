import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'rkt-orbit-plot',
  templateUrl: './orbit-plot.component.html',
  styleUrls: ['./orbit-plot.component.scss']
})
export class OrbitPlotComponent implements OnInit {
  /** Image source path */
  @Input() img: string;

  /** Orbit in km */
  @Input() orbit: number = 0;

  /** Planet radius in km */
  @Input() planetSize: number = 0;

  @HostBinding('style.left')
  @HostBinding('style.right')
  public get horizontalOffset() {
    return -((this.orbit * this.kmToPixelScale) * Math.PI) + 'px';
  }

  @HostBinding('style.top')
  public get topOffset() {
    return (-this.orbit * this.kmToPixelScale) + 'px';
  }

  @HostBinding('style.bottom')
  public get bottomOffset() {
    return -(this.orbit * this.kmToPixelScale) + 'px';
  }

  private get kmToPixelScale(): number {
    const scale = +document.documentElement.style.getPropertyValue('--km-to-pixel-scale');
    return scale;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
