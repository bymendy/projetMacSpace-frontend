/* tslint:disable */
import { Produit } from './produit';
import { CommandeFournisseur } from './commande-fournisseur';
export interface LigneCommandeFournisseur {
  produit?: Produit;
  commandeFournisseur?: CommandeFournisseur;
  creationDate?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  quantite?: number;
}
