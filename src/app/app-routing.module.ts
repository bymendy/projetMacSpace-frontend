import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeMdpProfilComponent } from './components/change-mdp-profil/change-mdp-profil.component';
import { DetailsMvtStkComponent } from './components/details-mvt-stk/details-mvt-stk.component';
import { FrsNouveauComponent } from './components/frs-nouveau/frs-nouveau.component';
import { MenuComponent } from './components/menu/menu.component';
import { NouveauCltFrsComponent } from './components/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdFrsComponent } from './components/nouvelle-cmd-frs/nouvelle-cmd-frs.component';
import { NouvelleInterComponent } from './components/nouvelle-inter/nouvelle-inter.component';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { CategorieComponent } from './pages/categorie/categorie.component';
import { NouvelleCategorieComponent } from './pages/categorie/nouvelle-categorie/nouvelle-categorie.component';
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
import { ProfilComponent } from './pages/profil/profil.component';
import { RapportsComponent } from './pages/rapports/rapports.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { NouvelUtilisateurComponent } from './pages/utilisateurs/nouvel-utilisateur/nouvel-utilisateur.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", 
    component: DashboardComponent, 
    children:[
      {path:'statistiques',  
      component:StatistiquesComponent
    },
    {
      path: 'produits',
      component: ProduitsComponent,
      data: {
        origin: 'produits'
      }
    },
    {
      path: 'nouveauproduit',
      component: NouveauProduitComponent,
      data: {
        origin: 'produits'
      }
    },
    {
      path: 'mvtstk',
      component: PageMvtstkComponent
    },
    {
      path: 'clients',
      component: ClientsComponent,
      data: {
        origin: 'clients'
      }
    },
    {
      path: 'nouveauclient',
      component: NouveauCltFrsComponent,
      data: {
        origin: 'clients'
      }
    },
    {
      path: 'fournisseurs',
      component: FournisseursComponent,
      data: {
        origin: 'fournisseurs'
      }
    },
    {
      path: 'nouveaufournisseur',
      component: FrsNouveauComponent,
      data: {
        origin: 'fournisseurs'
      }
    },
    {
      path: 'commandefournisseurs',
      component: CmdFournisseursComponent
    },
    {
      path: 'nouvellecommandefournisseurs',
      component: NouvelleCmdFrsComponent
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
      component: CategorieComponent,
      data: {
        origin: 'categorie'
      }
    },
    {
      path: 'nouvellecategorie',
      component: NouvelleCategorieComponent,
      data: {
        origin: 'categorie'
      }
    },
    {
      path: 'utilisateur',
      component: UtilisateursComponent,
      data: {
        origin: 'utilisateur'
      }
    },
    {
      path: 'nouvelutilisateur',
      component: NouvelUtilisateurComponent,
      data: {
        origin: 'utilisateur'
      }
    },
    {
      path: 'profil',
      component: ProfilComponent
    },
    {
      path: 'changemdpprofil',
      component: ChangeMdpProfilComponent
    }

  ] 
},
  { path: "menu", component: MenuComponent },

  { path: "rapports", component: RapportsComponent },
  { path: "stocks", component: StocksComponent },
  { path: "accueil", component: AccueilPageComponent },
  { path: "**", component: NotfoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }