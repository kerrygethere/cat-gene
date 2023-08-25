import { Injectable } from '@angular/core';
import { X, Y } from 'src/app/models/chromosome';
import { Cat, litterSize } from 'src/app/models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatFactoryService {

  constructor() { }

  randomKitty(): Cat {
    const random = Math.floor(Math.random() * 2);
    return random % 2 ? this.randomFemale() : this.randomMale();
  }

  randomFemale(): Cat {
    return new Cat([new X(), new X()]);
  }

  randomMale(): Cat {
    return new Cat([new X(), new Y()]);
  }

  kitten(mom: Cat, dad: Cat): Cat {
    const momGene = Math.floor(Math.random() * 2);
    const dadGene = Math.floor(Math.random() * 2);

    return new Cat([mom.genes[momGene], dad.genes[dadGene]]);
  }

  litter(mom: Cat, dad: Cat): Array<Cat> {
    const randomSize = Math.floor(Math.random() * litterSize.length);
    const size = litterSize[randomSize];
    let litter = [];
    for (let i = 0; i < size; i++) {
      litter.push(this.kitten(mom, dad));
    }
    return litter;
  }
}
