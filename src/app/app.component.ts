import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandPg01Component } from "./app/landinpage/land-pg01/land-pg01.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandPg01Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pj01-angular17';
}
