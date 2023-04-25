import { Component } from '@angular/core';
import { aboutMeText } from '../experience';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  aboutMeText: string = aboutMeText;
  imagePath: string = "assets/images/profile.jpg";

  isImageLoaded: boolean = false; 

  constructor() { }

  ngOnInit() {}
    
  onImageLoaded() {
    this.isImageLoaded = true;
  }

}
