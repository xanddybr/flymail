import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InternalServiceService } from '../services/internal-service.service';
import { fromEvent } from 'rxjs';


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
  frmevent:FormDataEvent

  ngOnInit(){
 
    this.estados = this.myservice.getEstados()
    this.indicacao = this.myservice.getIndication()
  
  }

}

