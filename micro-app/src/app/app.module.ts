// imports
import { Injector, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { PageOneModule } from './routes/page-one/page-one.module';
import { PageTwoModule } from './routes/page-two/page-two.module';
import { createCustomElement } from '@angular/elements';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule, 
    BrowserModule,
    PageOneModule,
    PageTwoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
//   bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private injector: Injector) {
        const el = createCustomElement(AppComponent, { injector });
        customElements.define('micro-ui', el);
    }


    ngDoBootstrap() {
        
    }
    

}