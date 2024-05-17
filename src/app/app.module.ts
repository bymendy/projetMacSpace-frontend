import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { InterventionsComponent } from './pages/interventions/interventions.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { StocksComponent } from './pages/stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilPageComponent,
    ClientsComponent,
    InterventionsComponent,
    StocksComponent,
    RapportsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'accueil', component: AccueilPageComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'interventions', component: InterventionsComponent },
      { path: 'stocks', component: StocksComponent },
      { path: 'rapports', component: RapportsComponent },
      { path: '', redirectTo: '/accueil', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }