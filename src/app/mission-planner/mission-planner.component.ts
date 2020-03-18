import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-planner',
  templateUrl: './mission-planner.component.html',
  styleUrls: ['./mission-planner.component.scss']
})
export class MissionPlannerComponent implements OnInit {
  payloadWeight: number = 0;
  targetOrbit: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
