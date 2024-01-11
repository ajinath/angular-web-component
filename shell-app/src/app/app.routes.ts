import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [

    { 
        path: 'prefix',
        children: [
            { path: 'page-one', component: AppComponent },
            { path: 'page-two', component: AppComponent }
        ]
    }
    
];
