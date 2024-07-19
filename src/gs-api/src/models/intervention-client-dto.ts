/* tslint:disable */
import { ClientDto } from './client-dto';
import { LigneInterventionClientDto } from './ligne-intervention-client-dto';
export interface InterventionClientDto {
  client?: ClientDto;
  code?: string;
  interventionLivree?: boolean;
  dateIntervention?: number;
  etatIntervention?: 'EN_COURS' | 'EN_ATTENTE' | 'TERMINEE';
  id?: number;
  idEntreprise?: number;
  ligneInterventionClients?: Array<LigneInterventionClientDto>;
}
