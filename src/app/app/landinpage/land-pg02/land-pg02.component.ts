import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-land-pg02',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './land-pg02.component.html',
  styleUrl: './land-pg02.component.scss'
})
export class LandPg02Component {

  cursos:string = "HTML"

  valida(){
    this.cursos == "HTML" ? this.cursos = "CSS": this.cursos = "JS"
  }

}


