import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html'
})
export class PageOneComponent implements OnInit {
  title = 'page 1';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log("here in code page 1")
  }
}
