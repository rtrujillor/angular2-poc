/**
 * Main App Component. The App's execution workflow start here
 */
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated'

import { HeroService } from './hero.service';
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";

/**
 * Defining the app's router
 * RouteConfig tell the router which views to display when a user clicks a link or pastes a URL into the browser address bar.
 * Takes an array of route definitions
 */
@RouteConfig([
    {
        // the router matches this route's path to the URL in the browser address bar
        path : '/heroes',
        // the official name of the route; it must begin with a capital letter to avoid confusion with the path
        name : 'Heroes',
        // the component that the router should create when navigating to this route
        component : HeroesComponent
    },
    {
        path : '/dashboard',
        name : 'Dashboard',
        component : DashboardComponent,
        // The router will display the dashboard when the browser URL doesn't match an existing route
        useAsDefault : true
    },
    {
        path : '/detail/:id',
        name : 'HeroDetail',
        component : HeroDetailComponent
    }
])


@Component({
    selector: 'my-app',

    template: `
        <h1>{{title}}</h1>

        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>

            <!-- If we paste the path, /heroes, into the browser address bar,
            the router should match it to the 'Heroes' route and display the HeroesComponent. But where? -->
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>

        <!-- We have to tell it where by adding <router-outlet> marker tags to the bottom of the template.
            RouterOutlet is one of the ROUTER_DIRECTIVES.
            The router displays each component immediately below the <router-outlet> as we navigate through the application. -->
        <router-outlet></router-outlet>
    `,

    styles: [``],

    directives: [ROUTER_DIRECTIVES] ,

    providers: [HeroService , ROUTER_PROVIDERS]

})

export class AppComponent{

  title = 'Tour of heroes';

  constructor(){ }
}



