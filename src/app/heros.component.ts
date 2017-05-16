import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { Hero} from './hero';
import {HeroService} from './hero.service';
import { Router} from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  hero: Hero= {
    id: 1,
    name: 'Windstorm'
  }
  heroes: Hero[];
  selectedHero: Hero; //=this.heroes[0];

  constructor(private heroService: HeroService,
  private router: Router
  ){
    //this.heroes=heroService.getHeroes();
  }

  getHeroes():void{
    this.heroService.getHeroes()
      .then(heroes=>this.heroes=heroes);
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero=hero;
  }

  gotoDetail(): void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
}




