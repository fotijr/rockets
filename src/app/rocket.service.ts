import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rocket } from './models';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private readonly rocketsUrl = '/assets/rockets.json';

  constructor(private http: HttpClient) { }

  /**
   * Gets all rockets
   */
  async getRockets(): Promise<Rocket[]> {
    const data = await this.http
      .get<{ rockets: Rocket[] }>(this.rocketsUrl).toPromise();
    return data.rockets;
  }
}
