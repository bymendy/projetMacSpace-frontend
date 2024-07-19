/* tslint:disable */
import { LigneInterventionDto } from './ligne-intervention-dto';
export interface InterventionsDto {
  code?: string;
  commentaire?: string;
  dateVente?: number;
  id?: number;
  idEntreprise?: number;
  ligneIntervention?: Array<LigneInterventionDto>;
}
