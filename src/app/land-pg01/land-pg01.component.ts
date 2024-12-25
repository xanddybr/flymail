import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnInit } from '@angular/core';
import { BriefVideoComponent } from "../brief-video/brief-video.component";
import { CatchLeadComponent } from "../catch-lead/catch-lead.component";



@Component({
  selector: 'app-land-pg01',
  standalone: true,
  imports: [CommonModule, BriefVideoComponent, CatchLeadComponent],
  templateUrl: './land-pg01.component.html',
  styleUrl: './land-pg01.component.scss'
  
})

export class LandPg01Component implements OnInit {
  
  btSmbState:boolean = true
  videoState:boolean = true
  ctLeadState:boolean = false
  imagem:string = "assets/img/card_catarseie.jpeg"
  
    
  changForCatchLead(){
    this.videoState = false
    this.btSmbState = false
    this.ctLeadState = true
  }

 

  ngOnInit(): void {


  }


   

}