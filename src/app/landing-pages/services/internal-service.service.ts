import { Injectable } from '@angular/core';
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
    return ['Instagram','FaceBook','YouTube','Google','Recomendação de um conhecido','Grupos de whatsapp']
  }

  getRangeAge():string[] {
    return ['15 á 30','30 á 45', '45 á 60','60 á 75','75 á 90','acima de 90']
  }

  getlifePosition():string[]{
    return ['Financeira','Profissional','Sentimental','Social','Mental/Pscicológica','Saúde Física']
  }



}
