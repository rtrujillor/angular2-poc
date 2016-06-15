import { Injectable } from '@angular/core';
import { HEROES } from './../mocks/mock-heroes'

/**
 * TypeScript sees the @Injectable() decorator and emits metadata about our service,
 * metadata that Angular may need to inject other dependencies into this service.
 */
@Injectable()
export class  HeroService {
  getHeroes() {
    return Promise.resolve(HEROES);
  }

  getHero2( id: number ) {
    return Promise.resolve(HEROES.filter(hero => hero.id === id)[0]);
  }

  getHero( id: number ) {
    return this.getHeroes()
        .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}
