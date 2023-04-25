import { Component, HostListener } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  title: string = 'Erik Niska';
  navItems: string[] = ['Hem', 'Om mig', 'CV', 'Länkar',];

  constructor(private router: Router) { } 

  onNavItemClicked(item: string) {
    if (item === 'Om mig') {
      this.router.navigate(['/about-me']); 
    }
    
    else if (item === 'Hem') {
      this.router.navigate(['/']); 
    }
    else if (item == 'CV') {
      this.router.navigate(['/experience']);
    }
    else if (item == 'Länkar'){
      this.router.navigate(['/links']);
    }
    
  }

}
