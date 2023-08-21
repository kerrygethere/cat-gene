import { Component } from '@angular/core';
import { CatFactoryService } from './services/cat-factory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cat = this.cattery.randomKitty();

  constructor(private cattery: CatFactoryService) {}
}
