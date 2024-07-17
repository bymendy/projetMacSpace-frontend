/* tslint:disable */
import { ClientDto } from './client-dto';
import { LigneInterventionClientDto } from './ligne-intervention-client-dto';
export interface InterventionClientDto {
  client?: ClientDto;
  code?: string;
  commandeLivree?: boolean;
  dateCommande?: number;
  etatCommande?: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  id?: number;
  idEntreprise?: number;
  ligneInterventionClients?: Array<LigneInterventionClientDto>;
}
