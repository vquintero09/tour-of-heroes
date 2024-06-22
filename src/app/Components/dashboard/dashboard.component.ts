import { Component, OnInit, inject } from '@angular/core';
import { HeroesApiService } from '../../Services/heroes-api.service';
import { IHero } from '../../Interfaces/heroes.interface';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private _heroService = inject(HeroesApiService);

  heroes: IHero[] = [];

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(){
    this._heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes.slice(1, 5))
  }
}
