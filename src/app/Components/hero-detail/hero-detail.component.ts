import { Component, Input, OnInit, inject } from '@angular/core';
import { IHero } from '../../Interfaces/heroes.interface';
import { NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesApiService } from '../../Services/heroes-api.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgIf],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {
  // @Input() Hero?: IHero;

  Hero: IHero | undefined;

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _heroService = inject(HeroesApiService);
  private readonly _router = inject(Router)

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this._heroService.getHero(id)
      .subscribe((hero) => this.Hero = hero)
  }

  Home(){
    this._router.navigate(['/dashboard'])
  }




}
