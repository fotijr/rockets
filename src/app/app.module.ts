import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AppRoutingModule } from './/app-routing.module';
import { MissionPlannerComponent } from './mission-planner/mission-planner.component';
import { OrbitPlotComponent } from './orbit-plot/orbit-plot.component';
import { PayloadEditorComponent } from './payload-editor/payload-editor.component';
import { OrbitEditorComponent } from './orbit-editor/orbit-editor.component';
import { CompareWithComponent } from './compare-with/compare-with.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LauncherSelectorComponent } from './launcher-selector/launcher-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    MissionPlannerComponent,
    OrbitPlotComponent,
    PayloadEditorComponent,
    OrbitEditorComponent,
    CompareWithComponent,
    WelcomeComponent,
    LauncherSelectorComponent
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
