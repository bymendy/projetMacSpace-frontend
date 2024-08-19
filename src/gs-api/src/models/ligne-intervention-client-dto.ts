/* tslint:disable */
import { ProduitDto } from './produit-dto';
export interface LigneInterventionClientDto {
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  produit?: ProduitDto;
  quantite?: number;
}
