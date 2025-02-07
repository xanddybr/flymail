
import { Routes } from '@angular/router';
import { LandPg01Component } from './landing-pages/landing-pg01/land-pg01.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
    {path:"", component:LandPg01Component},
    {path:"login", component:LoginComponent},
    {path:"dashboard", component:DashboardComponent},
];
