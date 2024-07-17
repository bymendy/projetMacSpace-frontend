/* tslint:disable */
import { Produit } from './produit';
export interface Category {
  code?: string;
  creationDate?: number;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  lastModifiedDate?: number;
  produits?: Array<Produit>;
}
