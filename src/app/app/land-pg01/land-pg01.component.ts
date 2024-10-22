import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { SbMaisComponent } from "../sb-mais/sb-mais.component";

@Component({
  selector: 'app-land-pg01',
  standalone: true,
  imports: [CommonModule, SbMaisComponent],
  templateUrl: './land-pg01.component.html',
  styleUrl: './land-pg01.component.scss'
  
})

export class LandPg01Component implements OnInit {
  
  mostrar:boolean = false
  imagem:string = "assets/img/card_catarseie.jpeg"
  video:string = "assets/video/brief_video_nany.mp4"
  
  muda(){
      this.mostrar = true
      console.log(this.mostrar)
  }

  ngOnInit(): void {
    document.getElementById('video')?.addEventListener('ended',()=>{const video = document.getElementById('sbMais'); video?.hidden == true})
    
  }
 



}

