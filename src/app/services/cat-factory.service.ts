import { Injectable } from '@angular/core';
import { X, Y } from 'src/app/models/chromosome';
import { Cat } from 'src/app/models/cat';

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
}
