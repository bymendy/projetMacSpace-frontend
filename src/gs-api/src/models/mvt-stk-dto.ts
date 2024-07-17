/* tslint:disable */
import { ProduitDto } from './produit-dto';
export interface MvtStkDto {
  article?: ProduitDto;
  dateMvt?: number;
  id?: number;
  idEntreprise?: number;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
