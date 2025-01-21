import { CommonModule } from '@angular/common';
import { Component,Input,OnInit } from '@angular/core';
import { CatchLeadComponent } from "../catch-lead/catch-lead.component";
import { BriefVideoComponent } from '../brief-video/brief-video.component';


@Component({
  selector: 'app-land-pg01',
  standalone: true,
  imports: [CommonModule, CatchLeadComponent, BriefVideoComponent],
  templateUrl: './land-pg01.component.html',
  styleUrl: './land-pg01.component.scss'
  
})

export class LandPg01Component implements OnInit {

  constructor(){}
  
  videoState:boolean
  ctLeadState:boolean
  imagem:string = "assets/img/card_catarseie.jpeg"
  lblbtnApostila:string
  parentData:string
  
  
  changForCatchLead(){
    this.videoState = false
    this.ctLeadState = true

    if(this.lblbtnApostila === 'Quero minha apostila grátis!') {
      this.lblbtnApostila = 'Baixar minha apostila grátis'
    } else {
      this.ctLeadState = false
      this.lblbtnApostila = 'Apostila Enviada..!'
    }
    
    
  }
 

  ngOnInit(): void {
    this.videoState = true
    this.ctLeadState = false
    this.lblbtnApostila = 'Quero minha apostila grátis!'
  }
}