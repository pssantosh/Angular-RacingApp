import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CONST_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { RacesComponent } from './races/races.component';
import { RaceService } from './services/race.service';
import { RaceComponent } from './race/race.component';
import { RaceDetailComponent } from './race-detail/race-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    RacesComponent,
    RaceComponent,
    RaceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [ RaceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
