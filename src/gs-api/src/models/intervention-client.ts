/* tslint:disable */
import { Client } from './client';
import { LigneInterventionClient } from './ligne-intervention-client';
export interface InterventionClient {
  client?: Client;
  code?: string;
  creationDate?: number;
  dateIntervention?: number;
  etatIntervention?: 'EN_COURS' | 'EN_ATTENTE' | 'TERMINEE';
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  ligneInterventionClients?: Array<LigneInterventionClient>;
}
