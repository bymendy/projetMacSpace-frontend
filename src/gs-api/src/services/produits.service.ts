/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ProduitDto } from '../models/produit-dto';
import { LigneInterventionClientDto } from '../models/ligne-intervention-client-dto';
import { LigneCommandeFournisseurDto } from '../models/ligne-commande-fournisseur-dto';
import { LigneInterventionDto } from '../models/ligne-intervention-dto';
@Injectable({
  providedIn: 'root',
})
class ProduitsService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/produits/all';
  static readonly savePath = '/gestiondestock/v1/produits/create';
  static readonly deletePath = '/gestiondestock/v1/produits/delete/{idProduit}';
  static readonly findAllArticleByIdCategoryPath = '/gestiondestock/v1/produits/filter/category/{idCategory}';
  static readonly findBycodeProduitPath = '/gestiondestock/v1/produits/filter/{codeProduit}';
  static readonly findHistoriaueInterventionClientPath = '/gestiondestock/v1/produits/historique/InterventionClient/{idProduit}';
  static readonly findHistoriqueCommandeFournisseurPath = '/gestiondestock/v1/produits/historique/commandefournisseur/{idProduit}';
  static readonly findHistoriqueVentesPath = '/gestiondestock/v1/produits/historique/vente/{idProduit}';
  static readonly findByIdPath = '/gestiondestock/v1/produits/{idProduit}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Renvoi la liste des produits
   *
   * Cette methode permet de chercher et renvoyer la liste des produits qui existent dans la BDD
   * @return La liste des produit / Une liste vide
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<ProduitDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/produits/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProduitDto>>;
      })
    );
  }
  /**
   * Renvoi la liste des produits
   *
   * Cette methode permet de chercher et renvoyer la liste des produits qui existent dans la BDD
   * @return La liste des produit / Une liste vide
   */
  findAll(): __Observable<Array<ProduitDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<ProduitDto>)
    );
  }

  /**
   * Enregistrer un produit
   *
   * Cette methode permet d'enregistrer ou modifier un produit
   * @param body undefined
   * @return L'objet produit cree / modifie
   */
  saveResponse(body?: ProduitDto): __Observable<__StrictHttpResponse<ProduitDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/produits/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProduitDto>;
      })
    );
  }
  /**
   * Enregistrer un produit
   *
   * Cette methode permet d'enregistrer ou modifier un produit
   * @param body undefined
   * @return L'objet produit cree / modifie
   */
  save(body?: ProduitDto): __Observable<ProduitDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as ProduitDto)
    );
  }

  /**
   * Supprimer un produit
   *
   * Cette methode permet de supprimer un produit par ID
   * @param idProduit undefined
   */
  deleteResponse(idProduit: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/produits/delete/${encodeURIComponent(String(idProduit))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Supprimer un produit
   *
   * Cette methode permet de supprimer un produit par ID
   * @param idProduit undefined
   */
  delete(idProduit: number): __Observable<null> {
    return this.deleteResponse(idProduit).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findAllArticleByIdCategoryResponse(idCategory: number): __Observable<__StrictHttpResponse<Array<ProduitDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/produits/filter/category/${encodeURIComponent(String(idCategory))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<ProduitDto>>;
      })
    );
  }
  /**
   * @param idCategory undefined
   * @return successful operation
   */
  findAllArticleByIdCategory(idCategory: number): __Observable<Array<ProduitDto>> {
    return this.findAllArticleByIdCategoryResponse(idCategory).pipe(
      __map(_r => _r.body as Array<ProduitDto>)
    );
  }

  /**
   * Rechercher un article par CODE
   *
   * Cette methode permet de chercher un article par son CODE
   * @param codeProduit undefined
   * @return Le produit a ete trouve dans la BDD
   */
  findBycodeProduitResponse(codeProduit: string): __Observable<__StrictHttpResponse<ProduitDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/produits/filter/${encodeURIComponent(String(codeProduit))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProduitDto>;
      })
    );
  }
  /**
   * Rechercher un article par CODE
   *
   * Cette methode permet de chercher un article par son CODE
   * @param codeProduit undefined
   * @return Le produit a ete trouve dans la BDD
   */
  findBycodeProduit(codeProduit: string): __Observable<ProduitDto> {
    return this.findBycodeProduitResponse(codeProduit).pipe(
      __map(_r => _r.body as ProduitDto)
    );
  }

  /**
   * @param idProduit undefined
   * @return successful operation
   */
  findHistoriaueInterventionClientResponse(idProduit: number): __Observable<__StrictHttpResponse<Array<LigneInterventionClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/produits/historique/InterventionClient/${encodeURIComponent(String(idProduit))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneInterventionClientDto>>;
      })
    );
  }
  /**
   * @param idProduit undefined
   * @return successful operation
   */
  findHistoriaueInterventionClient(idProduit: number): __Observable<Array<LigneInterventionClientDto>> {
    return this.findHistoriaueInterventionClientResponse(idProduit).pipe(
      __map(_r => _r.body as Array<LigneInterventionClientDto>)
    );
  }

  /**
   * @param idProduit undefined
   * @return successful operation
   */
  findHistoriqueCommandeFournisseurResponse(idProduit: number): __Observable<__StrictHttpResponse<Array<LigneCommandeFournisseurDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/produits/historique/commandefournisseur/${encodeURIComponent(String(idProduit))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneCommandeFournisseurDto>>;
      })
    );
  }
  /**
   * @param idProduit undefined
   * @return successful operation
   */
  findHistoriqueCommandeFournisseur(idProduit: number): __Observable<Array<LigneCommandeFournisseurDto>> {
    return this.findHistoriqueCommandeFournisseurResponse(idProduit).pipe(
      __map(_r => _r.body as Array<LigneCommandeFournisseurDto>)
    );
  }

  /**
   * @param idProduit undefined
   * @return successful operation
   */
  findHistoriqueVentesResponse(idProduit: number): __Observable<__StrictHttpResponse<Array<LigneInterventionDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/produits/historique/vente/${encodeURIComponent(String(idProduit))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<LigneInterventionDto>>;
      })
    );
  }
  /**
   * @param idProduit undefined
   * @return successful operation
   */
  findHistoriqueVentes(idProduit: number): __Observable<Array<LigneInterventionDto>> {
    return this.findHistoriqueVentesResponse(idProduit).pipe(
      __map(_r => _r.body as Array<LigneInterventionDto>)
    );
  }

  /**
   * Rechercher un produits par ID
   *
   * Cette methode permet de chercher un produits par son ID
   * @param idProduit undefined
   * @return Le produit a ete trouve dans la BDD
   */
  findByIdResponse(idProduit: number): __Observable<__StrictHttpResponse<ProduitDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/produits/${encodeURIComponent(String(idProduit))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ProduitDto>;
      })
    );
  }
  /**
   * Rechercher un produits par ID
   *
   * Cette methode permet de chercher un produits par son ID
   * @param idProduit undefined
   * @return Le produit a ete trouve dans la BDD
   */
  findById(idProduit: number): __Observable<ProduitDto> {
    return this.findByIdResponse(idProduit).pipe(
      __map(_r => _r.body as ProduitDto)
    );
  }
}

module ProduitsService {
}

export { ProduitsService }
