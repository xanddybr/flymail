import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',


})

export class AppComponent implements OnInit {

  constructor(private router:Router){

  }

    ngOnInit(): void {

      this.router.navigate(['landing_page_program_catarsie_2025_1_edition'])
    }
 
}
