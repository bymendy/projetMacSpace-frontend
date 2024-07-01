import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { StocksComponent } from './pages/stocks/stocks.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, children:[{path:'statistiques',  component:StatistiquesComponent}] },
  { path: "menu", component: MenuComponent },

  { path: "rapports", component: RapportsComponent },
  { path: "stocks", component: StocksComponent },
  { path: "", component: AccueilPageComponent },
  { path: "**", component: NotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }