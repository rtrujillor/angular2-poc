import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated'

import { Hero } from './hero';
import { HeroService } from './hero.service'

@Component({
  selector: 'my-hero-detail' ,
  templateUrl: 'app/hero-detail.component.html',
  styleUrls:['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  private hero: Hero;

  /**
   * We inject the both the RouteParams service and the HeroService into the constructor
   * @param heroService
   * @param routeParams
   */
  constructor(
      private heroService: HeroService ,
      private routeParams : RouteParams ) {
  }

  /**
   * Inside the ngOnInit lifecycle hook, extract the id parameter value from the RouteParams service
   * and use the HeroService to fetch the hero with that id.
   *
   * The hero id is a number. Route parameters are always strings.
   * So we convert the route parameter value to a number with the JavaScript (+) operator
   */
  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then( hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }


}
