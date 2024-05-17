import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { InterventionsComponent } from './pages/interventions/interventions.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { RapportsComponent } from './pages/rapports/rapports.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilPageComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'interventions', component: InterventionsComponent },
  { path: 'stocks', component: StocksComponent },
  { path: 'rapports', component: RapportsComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
