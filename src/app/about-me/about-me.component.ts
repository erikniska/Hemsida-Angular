import { Component, Renderer2, HostListener, ElementRef } from '@angular/core';
import { aboutMeText } from '../experience';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  aboutMeText: string = aboutMeText;
  

  isImageLoaded: boolean = false; 

  constructor(private renderer: Renderer2, private el: ElementRef) {}


  ngOnInit() {}
    
 

}
