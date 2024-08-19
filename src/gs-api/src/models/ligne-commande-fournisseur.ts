/* tslint:disable */
import { CommandeFournisseur } from './commande-fournisseur';
import { Produit } from './produit';
export interface LigneCommandeFournisseur {
  commandeFournisseur?: CommandeFournisseur;
  creationDate?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  prixUnitaire?: number;
  produit?: Produit;
  quantite?: number;
}
