import { Component, OnInit, inject } from '@angular/core';
import { HeroesApiService } from '../../../Services/heroes-api.service';
import { IHero } from '../../../Interfaces/heroes.interface';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../../hero-detail/hero-detail.component';
import { MessageService } from '../../../Services/message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [NgIf, NgFor, UpperCasePipe, FormsModule, HeroDetailComponent, RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent implements OnInit {
  heroes: IHero [] = [];
  SelectedHero?: IHero;

  private readonly _heroService = inject(HeroesApiService);
  private readonly _messageService = inject(MessageService);


  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes() {
    this._heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    })
  }

  // onSelect(hero: IHero) {
  //   this.SelectedHero = hero;
  //   this._messageService.addMessage(`HeroesComponent: Selected hero id = ${hero.id}`)
  // }

}
