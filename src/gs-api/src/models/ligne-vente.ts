/* tslint:disable */
import { Produit } from './produit';
import { Ventes } from './ventes';
export interface LigneVente {
  produit?: Produit;
  creationDate?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  quantite?: number;
  vente?: Ventes;
}
