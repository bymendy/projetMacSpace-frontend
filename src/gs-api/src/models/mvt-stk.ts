/* tslint:disable */
import { Produit } from './produit';
export interface MvtStk {
  creationDate?: number;
  dateMvt?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  produit?: Produit;
  quantite?: number;
  sourceMvt?: 'INTERVENTION_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'INTERVENTION';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
