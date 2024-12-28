
import { Routes } from '@angular/router';
import { LandPg01Component } from './landing-pages/landing-pg01/land-pg01.component';


export const routes: Routes = [

  {path:'landing_page_program_catarsie_serie_2025', component: LandPg01Component},
  {path:'', redirectTo:'',pathMatch:'full'}

];
