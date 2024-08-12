/* tslint:disable */
import { LigneIntervention } from './ligne-intervention';
export interface Interventions {
  code?: string;
  commentaire?: string;
  creationDate?: number;
  dateIntervention?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  ligneInterventions?: Array<LigneIntervention>;
}
