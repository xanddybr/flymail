import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-land-pg01',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './land-pg01.component.html',
  styleUrl: './land-pg01.component.scss'
})
export class LandPg01Component {
  
  
  meusDados:string[]=[]
  imagem:string = "assets/img/card_catarseie.jpeg"
  video:string = "assets/video/brief_video_nany.mp4"



}

