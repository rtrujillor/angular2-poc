/**
 * Main App Component. The App's execution workflow start here
 */
import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HeroesComponent} from "./../heroes/heroes.component";
import {DashboardComponent} from "./../dashboard/dashboard.component";
import {HeroDetailComponent} from "./../hero-detail/hero-detail.component";

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

/**
 * The class has one annotation @Component
 * They are a declarative way to add metadata to code
 * Annotations are not available in browser’s of today, which means we need to transpile it to something
 * that does run in current browsers.
 */
@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app/app.component.html',
    directives: [ROUTER_DIRECTIVES] ,
    providers: [ROUTER_PROVIDERS]
})

export class AppComponent {

  title = 'Tour of heroes';

  constructor() { }
}



