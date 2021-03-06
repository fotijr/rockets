import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketsComponent } from './rockets/rockets.component';
import { MissionPlannerComponent } from './mission-planner/mission-planner.component';
import { PayloadEditorComponent } from './payload-editor/payload-editor.component';
import { OrbitEditorComponent } from './orbit-editor/orbit-editor.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LauncherSelectorComponent } from './launcher-selector/launcher-selector.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'rockets', component: RocketsComponent },
  {
    path: 'mission-planner', component: MissionPlannerComponent,
    children: [
      { path: 'payload', component: PayloadEditorComponent },
      { path: 'orbit', component: OrbitEditorComponent },
      { path: 'launcher', component: LauncherSelectorComponent },
      { path: '', redirectTo: 'payload', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }