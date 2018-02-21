import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { MessageServiceService } from './message-service.service';
import { of } from 'rxjs/Observable/of';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageServiceService) { }

  getHeroes():Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
