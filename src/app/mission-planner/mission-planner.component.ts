import { Component, OnInit } from '@angular/core';
import { Rocket } from '../models';
import { RocketService } from '../rocket.service';

@Component({
  selector: 'app-mission-planner',
  templateUrl: './mission-planner.component.html',
  styleUrls: ['./mission-planner.component.scss']
})
export class MissionPlannerComponent implements OnInit {
  /** All available rockets */
  rockets: Rocket[] = [];
  /** Selected rocket */
  rocket: Rocket;
  payloadWeight: number = 0;
  targetOrbit: number = 0;

  constructor(private rocketService: RocketService) { }

  ngOnInit(): void {
    this.getRockets();
  }

  async getRockets() {
    this.rockets = await this.rocketService.getRockets();
  }
}
