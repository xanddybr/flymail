import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InternalServiceService } from '../services/internal-service.service';
import { CepServiceService } from '../services/cep-service.service';
import { Cep } from '../models/cep';


@Component({
  selector: 'app-catch-lead',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch-lead.component.html',
  styleUrl: './catch-lead.component.scss'
})

export class CatchLeadComponent implements OnInit {

  cep:Cep[]=[]
  estados:string[]=[]
  indicacao:string[]=[]

  carregar (){
    
  }


  constructor(private myservice: InternalServiceService){

  }
  
  ngOnInit(){

    
  
    this.estados = this.myservice.getEstados()
    this.indicacao = this.myservice.getIndication()


  }

 
  
  


}
