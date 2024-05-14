import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './page.container.html',
  styleUrls: ['./page.container.scss'],
})
export class PageContainer {
  constructor(private router: Router) {}

  goToUser() {
    this.router.navigate(['/users']);
  }
}
