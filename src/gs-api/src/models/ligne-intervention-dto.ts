/* tslint:disable */
import { ProduitDto } from './produit-dto';
import { InterventionsDto } from './interventions-dto';
export interface LigneInterventionDto {
  article?: ProduitDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
  intervention?: InterventionsDto;
}
