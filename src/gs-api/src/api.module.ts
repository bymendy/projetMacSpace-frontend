/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { ProduitsService } from './services/produits.service';
import { AuthenticationService } from './services/authentication.service';
import { CategoriesService } from './services/categories.service';
import { ClientsService } from './services/clients.service';
import { InterventionsService } from './services/interventions.service';
import { CommandefournisseurService } from './services/commandefournisseur.service';
import { EntreprisesService } from './services/entreprises.service';
import { FournisseurService } from './services/fournisseur.service';
import { MvtstkService } from './services/mvtstk.service';
import { PhotosService } from './services/photos.service';
import { UtilisateursService } from './services/utilisateurs.service';
import { InterventionService } from './services/intervention.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    ProduitsService,
    AuthenticationService,
    CategoriesService,
    ClientsService,
    InterventionsService,
    CommandefournisseurService,
    EntreprisesService,
    FournisseurService,
    MvtstkService,
    PhotosService,
    UtilisateursService,
    InterventionService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
