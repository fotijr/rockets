import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketsComponent } from './rockets/rockets.component';

const routes: Routes = [
  { path: '', redirectTo: '/rockets', pathMatch: 'full' },
  { path: 'rockets', component: RocketsComponent },
  // { path: 'rockets/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}