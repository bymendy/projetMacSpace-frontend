/* tslint:disable */
import { InterventionClient } from './intervention-client';
import { Produit } from './produit';
export interface LigneInterventionClient {
  InterventionClient?: InterventionClient;
  produit?: Produit;
  creationDate?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  quantite?: number;
}
