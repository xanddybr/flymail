import { Injectable } from '@angular/core'
import { CatchLeadForm } from '../model/CatchLeadForm'


@Injectable({
  providedIn: 'root'
})
export class InternalServiceService  {

  constructor(){}
  


  fillFormCatchLeads:CatchLeadForm = { 
    state:['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Santa Catarina','São Paulo','Sergipe','Tocantins'],
    indication: ['Instagram','FaceBook','YouTube','Google','Recomendação de um conhecido','Grupos de whatsapp'],
    rangeage: ['15 á 30','30 á 45', '45 á 60','60 á 75','75 á 90','acima de 90'],
    lifeposition: ['Financeira','Profissional','Sentimental','Social','Mental/Pscicológica','Saúde Física'],
   }
  



}
