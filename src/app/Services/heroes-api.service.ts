import { Inject, Injectable, inject} from '@angular/core';
import { Observable, of } from 'rxjs';
import { IHero } from '../Interfaces/heroes.interface';
import { HEROES } from '../Components/Heroes/heroes/heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroesApiService {
  
  private readonly _messageService = inject(MessageService);

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this._messageService.addMessage('HeroService: fetched heroes')
    return heroes
  }

  getHero(id: number): Observable<IHero>{
    const hero = HEROES.find((h) => h.id === id)!;
    this._messageService.addMessage(`HeroService: fetched hero id=${id}`)
    return of(hero)
  }

}
