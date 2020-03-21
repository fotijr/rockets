import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MissionPlannerService } from '../mission-planner.service';
import { UnitReference } from '../models';

@Component({
  selector: 'rkt-payload-editor',
  templateUrl: './payload-editor.component.html',
  styleUrls: ['./payload-editor.component.scss']
})
export class PayloadEditorComponent implements OnInit {
  @ViewChild('payloadSlider', { static: true }) payloadSlider: ElementRef<HTMLInputElement>;
  references: UnitReference[] = [
    { name: 'Fridge', value: 135 },
    { name: 'Motorcycle', value: 181 },
    { name: 'SUV', value: 2177 },
    { name: 'Airstream Trailer', value: 3533 },
    { name: 'Cassini', value: 5712 },
    { name: 'Hubble', value: 10886 },
    { name: 'Tractor Trailer', value: 15876 }
  ]

  constructor(private plannerService: MissionPlannerService) { }

  ngOnInit(): void {
    this.plannerService.payload.subscribe(altitude => this.payloadSlider.nativeElement.value = altitude.toString());
  }

  payloadUpdated(weight: number): void {
    this.plannerService.updatePayload(weight);
  }
}
