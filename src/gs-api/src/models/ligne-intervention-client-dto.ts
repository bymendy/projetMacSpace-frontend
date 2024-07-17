/* tslint:disable */
import { ProduitDto } from './produit-dto';
export interface LigneInterventionClientDto {
  article?: ProduitDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
