// The usual bootstrapping imports
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './app.component';

/**
 * This file is loaded via SystemJS and bootstraps the application loading the main component for the App
 * Notice that we supply the HTTP_PROVIDERS in an array as the second parameter to the bootstrap method
 * This has the same effect the providers array in @Component metadata
 */
bootstrap(AppComponent , [HTTP_PROVIDERS]);

