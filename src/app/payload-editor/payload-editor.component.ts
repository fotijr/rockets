import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MissionPlannerService } from '../mission-planner.service';

@Component({
  selector: 'rkt-payload-editor',
  templateUrl: './payload-editor.component.html',
  styleUrls: ['./payload-editor.component.scss']
})
export class PayloadEditorComponent implements OnInit {
  @ViewChild('payloadSlider', { static: true }) payloadSlider: ElementRef<HTMLInputElement>;

  constructor(private plannerService: MissionPlannerService) { }

  ngOnInit(): void {
    this.plannerService.payload.subscribe(altitude => this.payloadSlider.nativeElement.value = altitude.toString());
  }

  payloadUpdated(weight: number): void {
    this.plannerService.updatePayload(weight);
  }
}
