import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CatFactoryService } from '../services/cat-factory.service';
import { Cat, Color, Tabby } from '../models/cat';
import { alleles, Allele, Gene } from '../models/chromosome';
import { MatTable } from '@angular/material/table';

const diluteMapping = {
  Black: 'Gray',
  Brown: 'Lilac',
  Calico: 'Dilute Calico',
  Cinnamon: 'Fawn',
  Orange: 'Buff',
  Tortishell: 'Dilute Tortishell',
  White: 'White'
};

interface GeneData {
  name: string;
  a: string;
  b: string;
  isMasked: boolean;
};

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent {
  cat: Cat;
  displayColor: string = '';
  spottingMapping = {
    '=0': 'White',
    '=1': 'More',
    '=10': 'Less',
    '=13': 'Less',
    '=100': 'Gloves',
    'other': 'None'
  };
  geneticsData: Array<GeneData> = [];
  displayedColumns = ['name', 'a', 'b', 'isMasked'];

  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private cattery: CatFactoryService) {
    this.catMe();
  }

  catMe() {
    this.cat = this.cattery.randomKitty();

    if (this.cat.color) {
      this.displayColor = this.cat.isDilute ? diluteMapping[this.cat.color] : this.cat.color;
    }

    this.generateData();
  }

  generateData() {
    let data: Array<GeneData> = [];
    alleles.forEach((type: Allele) => {
      let b;
      if (type === 'orange' && this.cat.sex == 'male') {
        b = '';
      } else {
        b = (this.cat.genes[1] as Gene)[type].allele;
      }
      data.push({
        name: type,
        a: (this.cat.genes[0] as Gene)[type].allele,
        b,
        isMasked: this.isMasked(type)
      });
    });
    this.geneticsData = data;
  }

  isMasked(allele: Allele) {
    switch (allele) {
      case 'black':
        return this.isBlackMasked();
      case 'orange':
        return this.isOrangeMasked();
      case 'agouti':
        return this.isAgoutiMasked();
      case 'tabby':
        return this.isTabbyMasked();
      default:
        return false;
    }
  }

  isBlackMasked() {
    switch (this.cat.color) {
      case Color.White:
      case Color.Orange:
        return true;
      default: 
        return false;
    }
  }

  isOrangeMasked() {
    return this.cat.color === Color.White;
  }

  isAgoutiMasked() {
    return this.cat.color === Color.Orange || this.cat.color === Color.White;
  }

  isTabbyMasked() {
    return this.cat.tabby === Tabby.Solid || this.cat.color === Color.White;
  }
}
