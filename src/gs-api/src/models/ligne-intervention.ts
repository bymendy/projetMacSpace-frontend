/* tslint:disable */
import { Interventions } from './interventions';
import { Produit } from './produit';
export interface LigneIntervention {
  creationDate?: number;
  id?: number;
  idEntreprise?: number;
  intervention?: Interventions;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  produit?: Produit;
  quantite?: number;
}
