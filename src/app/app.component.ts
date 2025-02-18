import { Component, Input, OnInit } from '@angular/core';
import { LandPg01Component } from './landing-pages/landing-pg01/land-pg01.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ExpressServicesService } from './services/express-services.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandPg01Component,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',


})

export class AppComponent implements OnInit {

  constructor(private router:Router, express:ExpressServicesService) {

  }
    ngOnInit(): void {
   
    }
 
}
