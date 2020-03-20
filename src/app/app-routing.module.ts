import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketsComponent } from './rockets/rockets.component';
import { MissionPlannerComponent } from './mission-planner/mission-planner.component';
import { PayloadEditorComponent } from './payload-editor/payload-editor.component';
import { OrbitEditorComponent } from './orbit-editor/orbit-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/rockets', pathMatch: 'full' },
  { path: 'rockets', component: RocketsComponent },
  {
    path: 'mission-planner', component: MissionPlannerComponent,
    children: [
      { path: 'payload', component: PayloadEditorComponent },
      { path: 'orbit', component: OrbitEditorComponent },
      { path: '', redirectTo: 'orbit', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }