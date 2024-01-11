// imports
import { NgModule } from '@angular/core';
import { PageOneComponent } from './page-one.component';
import { RouterModule } from '@angular/router';

const pageOneRoutes = [ { 
    path: '',
    component: PageOneComponent
}]

// @NgModule decorator with its metadata
@NgModule({
  declarations: [PageOneComponent],
  imports: [
    RouterModule.forChild(pageOneRoutes)
  ]
})
export class PageOneModule {}