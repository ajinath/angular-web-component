import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';

import {platformBrowser} from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule).catch(e => console.error(e));

