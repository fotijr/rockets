import { Component, OnInit } from '@angular/core';
import { Rocket, Orbit } from '../models';
import { RocketService } from '../rocket.service';
import { MissionPlannerService } from '../mission-planner.service';

@Component({
  selector: 'rkt-mission-planner',
  templateUrl: './mission-planner.component.html',
  styleUrls: ['./mission-planner.component.scss']
})
export class MissionPlannerComponent implements OnInit {
  /** All available rockets */
  rockets: Rocket[] = [];
  /** Selected rocket */
  rocket: Rocket;
  payloadWeight: number = 0;
  targetOrbit: number;
  orbits: Orbit[] = [
    { altitude: 160, name: 'LEO' },
    { altitude: 2000, name: 'MEO' }
  ];

  /** All orbits, including target orbit */
  get allOrbits(): Orbit[] {
    const orbits = [...this.orbits];
    if (this.targetOrbit > 0) {
      orbits.push({ name: 'Target', altitude: this.targetOrbit, img: 'assets/img/satellite.png' });
    }
    orbits.sort((a, b) => (a.altitude < b.altitude) ? 1 : -1);
    this.setKmToPixelScale(orbits);
    return orbits;
  }

  private readonly kmToPixelCssName = '--km-to-pixel-scale';

  constructor(private rocketService: RocketService, private plannerService: MissionPlannerService) {
    this.plannerService.orbit.subscribe(orbit => {
      console.log('orbit', orbit);
      this.targetOrbit = orbit;
    });

    this.plannerService.payload.subscribe(weight => {
      this.payloadWeight = weight;
    });
  }

  ngOnInit(): void {
    document.documentElement.style.setProperty(this.kmToPixelCssName, '0.4');
    this.getRockets();
  }

  async getRockets() {
    this.rockets = await this.rocketService.getRockets();
  }

  private setKmToPixelScale(orbits: Orbit[]) {
    if (orbits.length > 0) {
      const [max, min] = [orbits[0].altitude, orbits[orbits.length - 1].altitude];
      const availablePixels = 200;
      const factor = availablePixels / (max - min);
      document.documentElement.style.setProperty(this.kmToPixelCssName, factor.toString());
    }
  }
}
