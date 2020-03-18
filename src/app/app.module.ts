import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AppRoutingModule } from './/app-routing.module';
import { MissionPlannerComponent } from './mission-planner/mission-planner.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    MissionPlannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
