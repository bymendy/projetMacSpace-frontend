/* tslint:disable */
import { ProduitDto } from './produit-dto';
import { VentesDto } from './ventes-dto';
export interface LigneVenteDto {
  article?: ProduitDto;
  id?: number;
  idEntreprise?: number;
  prixUnitaire?: number;
  quantite?: number;
  vente?: VentesDto;
}
