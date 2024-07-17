/* tslint:disable */
import { InterventionClient } from './intervention-client';
import { Adresse } from './adresse';
export interface Client {
  InterventionClients?: Array<InterventionClient>;
  adresse?: Adresse;
  creationDate?: number;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  mail?: string;
  nom?: string;
  numTel?: string;
  photo?: string;
  prenom?: string;
}
