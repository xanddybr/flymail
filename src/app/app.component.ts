import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandPg01Component } from "./land-pages/land-pg01/land-pg01.component";
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LandPg01Component, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  constructor(private router:Router){

  }

    ngOnInit(): void {
     
      this.router.navigate(['landingpagecatarseie2025'])
    
    }
 
}
