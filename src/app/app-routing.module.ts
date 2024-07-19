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
import { ApplicationGuardService } from './services/guard/application-guard.service';

const routes: Routes = [
  { path: 'login', 
  component: LoginComponent 
  },
  // DASHBOARD
  { 
    path: '', 
    //path: 'dashboard', 
    component: DashboardComponent, 
    children: [
      { path: 'statistiques', 
      component: StatistiquesComponent,
      canActivate: [ApplicationGuardService]
      },
      
      { 
        path: 'produits', 
        component: ProduitsComponent,
        data: { origin: 'produits' },
        canActivate: [ApplicationGuardService]
      },
      { 
        path: 'nouveauproduit', 
        component: NouveauProduitComponent,
        data: { origin: 'produits' },
        canActivate: [ApplicationGuardService]
      },
      { path: 'mvtstk', 
      component: PageMvtstkComponent,
      canActivate: [ApplicationGuardService] 
      },
      { 
        path: 'clients', 
        component: ClientsComponent,
        data: { origin: 'clients' },
        canActivate: [ApplicationGuardService]
      },
      { 
        path: 'nouveauclient', 
        component: NouveauCltFrsComponent,
        data: { origin: 'clients' },
        canActivate: [ApplicationGuardService]
      },
      { 
        path: 'fournisseurs', 
        component: FournisseursComponent,
        data: { origin: 'fournisseurs' },
        canActivate: [ApplicationGuardService]
      },
      { 
        path: 'nouveaufournisseur', 
        component: FrsNouveauComponent,
        data: { origin: 'fournisseurs' },
        canActivate: [ApplicationGuardService]
      },
      { path: 'commandefournisseurs', 
      component: CmdFournisseursComponent,
      canActivate: [ApplicationGuardService] 
      },

      { path: 'nouvellecommandefournisseurs', 
      component: NouvelleCmdFrsComponent,
      canActivate: [ApplicationGuardService] 
      },
      { path: 'interventions', 
      component: InterventionsComponent,
      canActivate: [ApplicationGuardService] 
      },
      { path: 'nouvelleinterventionclient', 
      component: NouvelleInterComponent,
      canActivate: [ApplicationGuardService] 
      },
      { 
        path: 'categorie', 
        component: CategorieComponent,
        data: { origin: 'categorie' },
        canActivate: [ApplicationGuardService]
      },
      { 
        path: 'nouvellecategorie', 
        component: NouvelleCategorieComponent,
        data: { origin: 'categorie' },
        canActivate: [ApplicationGuardService]
      },
      { 
        path: 'utilisateur', 
        component: UtilisateursComponent,
        data: { origin: 'utilisateur' },
        canActivate: [ApplicationGuardService]
      },
      { 
        path: 'nouvelutilisateur', 
        component: NouvelUtilisateurComponent,
        data: { origin: 'utilisateur' },
        canActivate: [ApplicationGuardService]
      },
      { path: 'profil', 
      component: ProfilComponent,
      canActivate: [ApplicationGuardService] 
      },
      { path: 'changemdpprofil', 
      component: ChangeMdpProfilComponent,
      canActivate: [ApplicationGuardService] 
      }
    ]
  },
  // Menu du Dashboard 
  { path: 'menu', 
  component: MenuComponent,
  canActivate: [ApplicationGuardService] 
  },
  // Page raports
  { path: 'rapports', 
  component: RapportsComponent,
  canActivate: [ApplicationGuardService] 
  },
  // Page Stocks
  { path: 'stocks', 
  component: StocksComponent,
  canActivate: [ApplicationGuardService] 
  },

  // Page Accueil

  { 
  path: 'accueil', 
  //path: '', 
  component: AccueilPageComponent 
  },
  // Page error 404
  { path: '**', 
  component: NotfoundPageComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }