/* tslint:disable */
import { ProduitDto } from './produit-dto';
import { CommandeFournisseur } from './commande-fournisseur';
export interface LigneCommandeFournisseurDto {
  article?: ProduitDto;
  commandeFournisseur?: CommandeFournisseur;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
}
