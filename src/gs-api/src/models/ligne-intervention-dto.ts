/* tslint:disable */
import { InterventionsDto } from './interventions-dto';
import { ProduitDto } from './produit-dto';
export interface LigneInterventionDto {
  id?: number;
  idEntreprise?: number;
  intervention?: InterventionsDto;
  prixUnitaire?: number;
  produit?: ProduitDto;
  quantite?: number;
}
