import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InternalServiceService } from '../services/internal-service.service';
import { Cep } from '../models/Cep';
import { of } from 'rxjs';
import { error } from 'jquery';


@Component({
  selector: 'app-catch-lead',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch-lead.component.html',
  styleUrl: './catch-lead.component.scss'
})

export class CatchLeadComponent implements OnInit {


  constructor(private myservice: InternalServiceService){}

  ncep:Cep[]=[]
  estados:string[]=[]
  indicacao:string[]=[]

  carregar (){
    this.myservice.getCep().subscribe({ 
      next: (v) => this.ncep = v, 
      error: (e) => console.log (e), 
      complete: ()=> console.log('requisição concluida com sucesso!')})
  }
    
  ngOnInit(){
 
    this.carregar()
    this.estados = this.myservice.getEstados()
    this.indicacao = this.myservice.getIndication()
  
  }

 
  
  


}
