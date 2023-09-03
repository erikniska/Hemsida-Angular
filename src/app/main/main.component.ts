import { Component, OnInit } from '@angular/core';
import { homeText } from '../Homepage';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string = 'My Resume';
  homeText: string = homeText;
  

  constructor() { }

  ngOnInit() {}
    

  }

