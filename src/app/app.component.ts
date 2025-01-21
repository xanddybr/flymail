import { Component, Input, OnInit } from '@angular/core';
import { LandPg01Component } from './landing-pages/landing-pg01/land-pg01.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandPg01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',


})

export class AppComponent implements OnInit {

  vai:string = 'Foi'

  constructor(){

  }

    ngOnInit(): void {
    
    }
 
}
