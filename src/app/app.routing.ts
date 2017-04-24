import { RouterModule, Routes } from '@angular/router';
import { RacesComponent } from './races/races.component';
import { RaceDetailComponent } from './race-detail/race-detail.component';

const MAINMENU_ROUTES: Routes = [
    { path: '', redirectTo: 'races', pathMatch: 'full' },
    { path: 'races', component: RacesComponent },
    { path: 'races/:id', component: RaceDetailComponent }
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);