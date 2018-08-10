import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rocket } from './rocket';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RocketService {
  private rocketsUrl = '/assets/rockets.json'; // URL to web api

  constructor(private http: HttpClient) { }

  getRockets(): Observable<Rocket[]> {
    return this.http
    .get<any>(this.rocketsUrl)
    .pipe(map(data => <Rocket[]>data.rockets), catchError(this.handleError));
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
}
