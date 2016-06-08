import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'

/**
 * TypeScript sees the @Injectable() decorator and emits metadata about our service,
 * metadata that Angular may need to inject other dependencies into this service.
 */
@Injectable()
export class  HeroService {
  getHeroes(){
    return Promise.resolve(HEROES);
  }
}
