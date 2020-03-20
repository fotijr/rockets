import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionPlannerService {
  private orbitAltitude = new BehaviorSubject(250);
  /** Orbital attitude in km */
  orbit = this.orbitAltitude.asObservable();

  private payloadWeight = new BehaviorSubject(250);
  /** Payload in kg */
  payload = this.payloadWeight.asObservable();

  constructor() { }

  updateOrbit(altitude: number) {
    this.orbitAltitude.next(altitude)
  }

  /**
   * Update payload weight
   * @param payload Weight in kg
   */
  updatePayload(payload: number) {
    this.payloadWeight.next(payload);
  }
}
