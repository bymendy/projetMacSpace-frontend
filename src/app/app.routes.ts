import { Routes } from '@angular/router';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { InterventionsComponent } from './pages/interventions/interventions.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { StocksComponent } from './pages/stocks/stocks.component';

export const routes: Routes = [

    {
        path: "login", 
        component: LoginComponent
    },
    {
        path: "rapports", 
        component: RapportsComponent
    },
    {
        path: "stocks", 
        component: StocksComponent
    },
    {
        path: "interventions", 
        component: InterventionsComponent
    },
    {
        path: "clients", 
        component: ClientsComponent
    },
    {
        path: "", 
        component: AccueilPageComponent
    },
    {
        path: "**", // 
        component: NotfoundPageComponent
    }
];
