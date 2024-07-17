/* tslint:disable */
import { CategoryDto } from './category-dto';
export interface ProduitDto {
  category?: CategoryDto;
  codeProduit?: string;
  designation?: string;
  id?: number;
  idEntreprise?: number;
  photo?: string;
  prixUnitaireHt?: number;
  prixUnitaireTtc?: number;
  tauxTva?: number;
}
