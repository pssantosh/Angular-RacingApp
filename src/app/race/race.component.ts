import { Component, OnInit, Input } from '@angular/core';
import { RacesComponent } from './../races/races.component';

@Component({
  selector: 'race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  constructor(private racesComponent : RacesComponent) { }

  @Input() race;

  ngOnInit() {
  }
  
  castDate(date) {
    return new Date(date);
  }

  enterRace(race) {
    this.racesComponent.enterRace(this.race);
  }

  cancelRace(race) {
    this.racesComponent.cancelRace(this.race);
  }

}
