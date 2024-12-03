import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../models/Cep';


@Injectable({
  providedIn: 'root'
})
export class InternalServiceService  {

  constructor(private http:HttpClient){

  }

  private url ='https://viacep.com.br/ws/21730000/json/'

  getCep(): Observable<Cep[]>{
    return this.http.get<Cep[]>(this.url)
  }

  getEstados():string[] {
    return ["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Santa Catarina","São Paulo","Sergipe","Tocantins"]
  }

  getIndication():string[] {
    return ['Instagram','FaceBook','YouTube','Google','Recomendação de um amigo']
  }



}
