import {Component , OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated'

import { Hero } from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({

  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css'],

  /**
   * The providers array tells Angular to create a fresh instance of the HeroService when it creates a new AppComponent.
   * The AppComponent can use that service to get heroes and so can every child component of its component tree
   */
  providers: []

})

/**
 * interface OnInit : Angular will call it if we implement the Angular ngOnInit Lifecycle Hook.
 * Angular offers a number of interfaces for tapping into critical moments in the component lifecycle:
 * at creation, after each change, and at its eventual destruction.
 */
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes : Hero[];

  constructor(
      private heroService : HeroService ,
      private router : Router
  ){ }

  /**
   * Each interface has a single method. When the component implements that method,
   * Angular calls it at the appropriate time.
   */
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes()
      .then( heroesList => this.heroes = heroesList);
  }

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }

  gotoDetail(){
    this.router.navigate(['HeroDetail' , { id : this.selectedHero.id}]);
  }
}
