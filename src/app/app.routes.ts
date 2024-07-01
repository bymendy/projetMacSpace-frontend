import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { StocksComponent } from './pages/stocks/stocks.component';

export const routes: Routes = [

    {
        path: "dashboard", 
        component: DashboardComponent
    },
    // {
    //     path: "statistiques", 
    //     component: StatistiquesComponent
    // },
    {
        path: "menu", 
        component: MenuComponent
    },
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
        path: "", 
        component: AccueilPageComponent
    },
    {
        path: "**", // 
        component: NotfoundPageComponent
    }
];
