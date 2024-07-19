/* tslint:disable */
import { ProduitDto } from './produit-dto';
import { InterventionsDto } from './interventions-dto';
export interface LigneInterventionDto {
  produit?: ProduitDto;
  id?: number;
  idEntreprise?: number;
  dateouvertureTicket?: number;
  problematique?: string;
  intervention?: InterventionsDto;
}
