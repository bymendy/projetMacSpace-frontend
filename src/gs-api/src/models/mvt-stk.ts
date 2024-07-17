/* tslint:disable */
import { Produit } from './produit';
export interface MvtStk {
  produit?: Produit;
  creationDate?: number;
  dateMvt?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
