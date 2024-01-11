// imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageTwoComponent } from './page-two.component';

const pageTwoRoutes = [ { 
    path: '',
    component: PageTwoComponent
}]

// @NgModule decorator with its metadata
@NgModule({
  declarations: [PageTwoComponent],
  imports: [
   RouterModule.forChild(pageTwoRoutes)
  ]
})
export class PageTwoModule {}