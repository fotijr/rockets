import { Component, OnInit } from '@angular/core';
import { Rocket } from '../models';
import { RocketService } from '../rocket.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets: Rocket[];

  constructor(private rocketService: RocketService) { }

  getRockets(): void {
    this.rocketService
      .getRockets()
      .subscribe(
        rockets => (this.rockets = rockets)
        // error => (this.error = error)
      )
  }

  ngOnInit() {
    this.getRockets();
  }

}
