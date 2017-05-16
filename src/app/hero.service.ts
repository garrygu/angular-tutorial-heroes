import { Injectable} from '@angular/core';
import { Hero} from './hero';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]>{
    //return Promise.resolve(HEROES);
    return new Promise( Resolve=>{
      setTimeout(()=>Resolve(HEROES),10);
    })
  }

  getHero(id: number): Promise<Hero>{
    return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id===id));
  }
}
