import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MissionPlannerService } from '../mission-planner.service';

@Component({
  selector: 'rkt-orbit-editor',
  templateUrl: './orbit-editor.component.html',
  styleUrls: ['./orbit-editor.component.scss']
})
export class OrbitEditorComponent implements OnInit {
  @Input() targetOrbit: number;
  @ViewChild('orbitSlider', { static: true }) orbitSlider: ElementRef<HTMLInputElement>;

  constructor(private plannerService: MissionPlannerService) { }

  ngOnInit(): void {
    this.plannerService.orbit.subscribe(altitude => this.orbitSlider.nativeElement.value = altitude.toString());
  }

  orbitUpdated(altitude: number): void {
    this.plannerService.updateOrbit(altitude);
  }
}
