import { Component } from '@angular/core';
import { CatFactoryService } from '../services/cat-factory.service';
import { Cat } from '../models/cat';

@Component({
  selector: 'app-litter',
  templateUrl: './litter.component.html',
  styleUrls: ['./litter.component.scss']
})
export class LitterComponent {
  mom: Cat = this.cattery.randomFemale();
  dad: Cat = this.cattery.randomMale();
  litter: Array<Cat> = [];

  constructor(private cattery: CatFactoryService) {}
}
