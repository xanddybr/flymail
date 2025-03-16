import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ExpressServicesService } from './services/express-services.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',


})

export class AppComponent implements OnInit {

  constructor(private router:Router, express:ExpressServicesService) {

  }
    ngOnInit(): void {
   
    }
 
}
