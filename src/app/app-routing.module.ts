import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketsComponent } from './rockets/rockets.component';
import { MissionPlannerComponent } from './mission-planner/mission-planner.component';

const routes: Routes = [
  { path: '', redirectTo: '/rockets', pathMatch: 'full' },
  { path: 'rockets', component: RocketsComponent },
  { path: 'mission-planner', component: MissionPlannerComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}