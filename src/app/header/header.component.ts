import { Component, HostListener } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 

  constructor(private router: Router) { } 

  onNavItemClicked(item: string) {

  }
  navigateToHomepage() {
    this.router.navigate(['/']); // Navigate to the homepage
}
}