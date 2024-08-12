/* tslint:disable */
import { Client } from './client';
import { LigneInterventionClient } from './ligne-intervention-client';
export interface InterventionClient {
  client?: Client;
  code?: string;
  creationDate?: number;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  ligneInterventionClients?: Array<LigneInterventionClient>;
}
