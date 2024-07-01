import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { StocksComponent } from './pages/stocks/stocks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilPageComponent,
    LoginComponent,
    StatistiquesComponent,
    NotfoundPageComponent,
    RapportsComponent,
    StocksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }