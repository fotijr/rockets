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

  async getRockets() {
    this.rockets = await this.rocketService.getRockets();
  }

  ngOnInit() {
    this.getRockets();
  }

}
