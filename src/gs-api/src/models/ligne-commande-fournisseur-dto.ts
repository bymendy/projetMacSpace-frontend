/* tslint:disable */
import { CommandeFournisseur } from './commande-fournisseur';
import { ProduitDto } from './produit-dto';
export interface LigneCommandeFournisseurDto {
  commandeFournisseur?: CommandeFournisseur;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  produit?: ProduitDto;
  quantite?: number;
}
