import { Routes } from '@angular/router';
import { DetailsMvtStkComponent } from './components/details-mvt-stk/details-mvt-stk.component';
import { FrsNouveauComponent } from './components/frs-nouveau/frs-nouveau.component';
import { MenuComponent } from './components/menu/menu.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdFrsComponent } from './components/nouvelle-cmd-frs/nouvelle-cmd-frs.component';
import { NouvelleInterComponent } from './components/nouvelle-inter/nouvelle-inter.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { CmdFournisseursComponent } from './pages/cmd-fournisseurs/cmd-fournisseurs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FournisseursComponent } from './pages/fournisseurs/fournisseurs.component';
import { InterventionsComponent } from './pages/interventions/interventions.component';
import { LoginComponent } from './pages/login/login.component';
import { PageMvtstkComponent } from './pages/mvtstk/page-mvtstk/page-mvtstk.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
import { NouveauProduitComponent } from './pages/produits/nouveau-produit/nouveau-produit.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { StocksComponent } from './pages/stocks/stocks.component';

export const routes: Routes = [

    {
        path: "", 
        component: DashboardComponent,
        children:[
        {
            path:'statistiques',  
            component:StatistiquesComponent
        },
        {
            path: 'produits',
            component: ProduitsComponent
        },
        {
          path: 'nouveauproduit',
          component: NouveauProduitComponent
        },
        {
          path: 'mvtstk',
          component: PageMvtstkComponent
        },
        {
          path: 'clients',
          component: ClientsComponent
        },
        {
          path: 'nouveauclient',
          component: NouveauCltFrsComponent
        },
        {
          path: 'fournisseurs',
          component: FournisseursComponent
        },
        {
          path: 'nouveaufournisseur',
          component: FrsNouveauComponent
        },
        {
            path: 'nouvellecommandefournisseurs',
            component: NouvelleCmdFrsComponent
        },
        
        {
            path: 'commandefournisseurs',
            component: CmdFournisseursComponent
        },
        {
          path: 'interventions',
          component: InterventionsComponent
        },
        {
          path: 'nouvelleinterventionclient',
          component: NouvelleInterComponent
        },
        {
          path: 'categorie',
          component: CategorieComponent
        },
        {
          path: 'nouvellecategorie',
          component: CategorieComponent
        }
    ]
        
    },
    
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
        path: "accueil", 
        component: AccueilPageComponent
    },
    {
        path: "**", // 
        component: NotfoundPageComponent
    }
];
