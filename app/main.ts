// The usual bootstrapping imports
import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app/app.component'

import { HeroService } from './services/hero.service';

/**
 * This file is loaded via SystemJS and bootstraps the application loading the main component for the App
 * Notice that we supply the HTTP_PROVIDERS in an array as the second parameter to the bootstrap method
 * This has the same effect the providers array in @Component metadata
 */
bootstrap(AppComponent, [HeroService]);

