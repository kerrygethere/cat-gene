import { Component, OnInit } from '@angular/core';
import { CatFactoryService } from './services/cat-factory.service';
import { Cat } from './models/cat';

const diluteMapping = {
  Black: 'Gray',
  Orange: 'Buff',
  Tortishell: 'Dilute Tortishell',
  White: 'White'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cat: Cat = this.cattery.randomKitty();
  displayColor: string = '';
  spottingMapping = {
    '=0': 'White',
    '=1': 'More',
    '=10': 'Less',
    '=13': 'Less',
    '=100': 'Gloves',
    'other': 'None'
  };

  constructor(private cattery: CatFactoryService) {}

  ngOnInit() {
    if (this.cat.color) {
      this.displayColor = this.cat.isDilute ? diluteMapping[this.cat.color] : this.cat.color;
    }
  }

}
