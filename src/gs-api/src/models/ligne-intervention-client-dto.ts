/* tslint:disable */
import { InterventionClientDto } from './intervention-client-dto';
import { ProduitDto } from './produit-dto';
export interface LigneInterventionClientDto {
  interventions?: InterventionClientDto;
  id?: number;
  idEntreprise?: number;
  dateouvertureTicket?: number;
  problematique?: string;
}
