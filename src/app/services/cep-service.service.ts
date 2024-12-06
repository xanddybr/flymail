import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../models/Cep';

@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

  constructor(private http: HttpClient){

  }

  url:string ='https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/'

  getCep(): Observable<Cep[]>{
    return this.http.get<Cep[]>(this.url)
  }




}
