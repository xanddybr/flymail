import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InternalServiceService } from '../services/internal-service.service';
import { fromEvent } from 'rxjs';
import { fakeAsync } from '@angular/core/testing';


@Component({
  selector: 'app-catch-lead',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch-lead.component.html',
  styleUrl: './catch-lead.component.scss'
})

export class CatchLeadComponent implements OnInit {

  constructor(private myservice: InternalServiceService){}

  pointE:any[]=[]
  estados:string[]=[]
  indicacao:string[]=[]
  rangeAge:string[]=[]
  lifePosition:string[]=[]
  btnDownload:boolean
  catchLeadPanel:boolean
  textMain:string


  ngOnInit(){
    this.estados = this.myservice.getEstados()
    this.indicacao = this.myservice.getIndication()
    this.rangeAge = this.myservice.getRangeAge()
    this.lifePosition = this.myservice.getlifePosition()
    this.catchLeadPanel = true
    this.btnDownload = true
    this.textMain = "PREENCHA OS CAMPOS PARA OBTER SUA APOSTILA GRATUITA!"
    
  }

  checkOption():void{
    this.btnDownload == true ? this.btnDownload = false : this.btnDownload = true
  }

  sendCatchLead(){
    this.catchLeadPanel = false
     this.textMain = "Parabéns! Você receberá a apostila em seu email, e informaçẽos sobre o treinamento Catarse!"
  }
}
