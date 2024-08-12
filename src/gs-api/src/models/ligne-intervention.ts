/* tslint:disable */
import { Produit } from './produit';
import { Interventions } from './interventions';
export interface LigneIntervention {
  produit?: Produit;
  creationDate?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  quantite?: number;
  intervention?: Interventions;
}
