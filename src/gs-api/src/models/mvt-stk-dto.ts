/* tslint:disable */
import { ProduitDto } from './produit-dto';
export interface MvtStkDto {
  dateMvt?: number;
  id?: number;
  idEntreprise?: number;
  produit?: ProduitDto;
  quantite?: number;
  sourceMvt?: 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'INTERVENTION';
  typeMvt?: 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
}
