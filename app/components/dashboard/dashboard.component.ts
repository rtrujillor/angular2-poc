import {Component , OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated'

import {Hero} from './../../models/hero'
import {HeroService} from './../../services/hero.service'

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    styleUrls: ['app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit{

    heroes : Hero[] = [];

    /**
     * Injecting services in the constructor
     * @param heroService
     */
    constructor(
        private heroService : HeroService ,
        private router : Router ) {

    }

    /**
     * Calling the service on a Lifecycle hook , when the component has been initialized
     */
    ngOnInit(){
        this.heroService.getHeroes()
            .then( heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail( hero : Hero ){

        /**
         * Set a route link parameters array
         * This array has two elements, the name of the destination route
         * and a route parameter object with an id field set to the value of the selected hero's id.
         */

        let link = ['HeroDetail' , { id : hero.id}];

        this.router.navigate(link);

    }
}
