import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-catch-lead',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch-lead.component.html',
  styleUrl: './catch-lead.component.scss'
})

export class CatchLeadComponent implements OnInit {

  constructor(){}

  
  @Input() fillFormService:any
  states:string[]=[]
  indication:string[]=[]
  rangeAge:string[]=[]
  lifePosition:string[]=[]
  btnDownload:boolean
  catchLeadPanel:boolean
  textMain:string

  ngOnInit(){

    this.states = this.fillFormService.fillFormCatchLeads.state
    this.indication = this.fillFormService.fillFormCatchLeads.indication
    this.rangeAge = this.fillFormService.fillFormCatchLeads.rangeage
    this.lifePosition = this.fillFormService.fillFormCatchLeads.lifeposition
    this.catchLeadPanel = true
    this.btnDownload = true
    this.textMain = "PREENCHA OS CAMPOS PARA OBTER SUA APOSTILA GRATUITA!"


  }
  
  checkOption():void{
    this.btnDownload == true ? this.btnDownload = false : this.btnDownload = true
  }

  keyevent(){
    document.addEventListener('keypress',function(event) {
      console.log(`key pressed, ${event.key}`)
      console.log(`key code, ${event.code}`)
    })
  }

  sendLead(){
    location.reload()
  }
  
 

}
