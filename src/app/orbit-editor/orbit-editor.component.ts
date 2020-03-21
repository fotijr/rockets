import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MissionPlannerService } from '../mission-planner.service';
import { UnitReference } from '../models';

@Component({
  selector: 'rkt-orbit-editor',
  templateUrl: './orbit-editor.component.html',
  styleUrls: ['./orbit-editor.component.scss']
})
export class OrbitEditorComponent implements OnInit {
  @Input() targetOrbit: number;
  @ViewChild('orbitSlider', { static: true }) orbitSlider: ElementRef<HTMLInputElement>;
  references: UnitReference[] = [
    { name: 'ISS', value: 409 },
    { name: 'Hubble', value: 568 },
    { name: 'GPS', value: 202000 }
  ]

  constructor(private plannerService: MissionPlannerService) { }

  ngOnInit(): void {
    this.plannerService.orbit.subscribe(altitude => this.orbitSlider.nativeElement.value = altitude.toString());
  }

  orbitUpdated(altitude: number): void {
    this.plannerService.updateOrbit(altitude);
  }
}
