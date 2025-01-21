
import { Routes } from '@angular/router';
import { LandPg01Component } from './landing-pages/landing-pg01/land-pg01.component';


export const routes: Routes = [

  {path:'landing_page_program_catarseie_2025_1_edition', component: LandPg01Component},
  {path:'', redirectTo:'/landing_page_program_catarseie_2025_1_edition',pathMatch:'full'},
  {path:'**', component: LandPg01Component}
  

];
