import { Component } from '@angular/core';
import { IHero } from './Interfaces/heroes.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Tour of Heroes';

  hero: IHero = {
    id: 1,
    name: 'Windstorm'
  }
}

