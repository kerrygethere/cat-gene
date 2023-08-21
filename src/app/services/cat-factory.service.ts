import { Injectable } from '@angular/core';
import { X, Y } from 'src/app/models/chromosome';

@Injectable({
  providedIn: 'root'
})
export class CatFactoryService {

  constructor() { }

  randomKitty(): [X, X | Y] {
    const random = Math.floor(Math.random() * 2);
    return random % 2 ? this.randomFemale() : this.randomMale();
  }

  randomFemale(): [X, X] {
    return [new X(), new X()];
  }

  randomMale(): [X, Y] {
    return [new X(), new Y()]
  }
}
