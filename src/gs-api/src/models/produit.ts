/* tslint:disable */
import { Category } from './category';
import { LigneCommandeFournisseur } from './ligne-commande-fournisseur';
import { LigneInterventionClient } from './ligne-intervention-client';
import { LigneVente } from './ligne-vente';
import { MvtStk } from './mvt-stk';
export interface Produit {
  category?: Category;
  codeProduit?: string;
  creationDate?: number;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  ligneCommandeFournisseurs?: Array<LigneCommandeFournisseur>;
  ligneInterventionClients?: Array<LigneInterventionClient>;
  ligneVentes?: Array<LigneVente>;
  mvtStks?: Array<MvtStk>;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
