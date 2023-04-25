import { Component, OnInit } from '@angular/core';
import { homeText } from '../Homepage';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string = 'My Resume';
  homeText: string = homeText;
  isImageLoaded: boolean = false; 

  constructor() { }

  ngOnInit() {}
    
  onImageLoaded() {
    this.isImageLoaded = true;
  }
}
