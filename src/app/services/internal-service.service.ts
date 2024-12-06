import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InternalServiceService  {

  constructor(private http:HttpClient){

  }
  
  getEstados():string[] {
    return ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Santa Catarina","São Paulo","Sergipe","Tocantins"]
  }

  getIndication():string[] {
    return ['Instagram','FaceBook','YouTube','Google','Recomendação de um amigo']
  }



}
