/* tslint:disable */
import { LigneInterventionDto } from './ligne-intervention-dto';
export interface InterventionsDto {
  code?: string;
  commentaire?: string;
  dateIntervention?: number;
  id?: number;
  idEntreprise?: number;
  ligneInterventions?: Array<LigneInterventionDto>;
}
