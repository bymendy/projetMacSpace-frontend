/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { InterventionClientDto } from '../models/intervention-client-dto';
import { LigneInterventionClientDto } from '../models/ligne-intervention-client-dto';
@Injectable({
  providedIn: 'root',
})
class InterventionsService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/interventions/all';
  static readonly savePath = '/gestiondestock/v1/interventions/create';
  static readonly deleteProduitPath = '/gestiondestock/v1/interventions/delete/produits/{idCommande}/{idLigneCommande}';
  static readonly deletePath = '/gestiondestock/v1/interventions/delete/{idInterventionClient}';
  static readonly findByCodePath = '/gestiondestock/v1/interventions/filter/{codeInterventionClient}';
  static readonly findAllLignesCommandesClientByInterventionClientIdPath = '/gestiondestock/v1/interventions/lignesCommande/{idCommande}';
  static readonly updateArticlePath = '/gestiondestock/v1/interventions/update/article/{idCommande}/{idLigneCommande}/{idProduit}';
  static readonly updateClientPath = '/gestiondestock/v1/interventions/update/client/{idCommande}/{idClient}';
  static readonly updateEtatCommandePath = '/gestiondestock/v1/interventions/update/etat/{idCommande}/{etatCommande}';
  static readonly updateQuantiteCommandePath = '/gestiondestock/v1/interventions/update/quantite/{idCommande}/{idLigneCommande}/{quantite}';
  static readonly findByIdPath = '/gestiondestock/v1/interventions/{idInterventionClient}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<InterventionClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/interventions/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<InterventionClientDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<InterventionClientDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<InterventionClientDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: InterventionClientDto): __Observable<__StrictHttpResponse<InterventionClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/gestiondestock/v1/interventions/create`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionClientDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: InterventionClientDto): __Observable<InterventionClientDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as InterventionClientDto)
    );
  }

  /**
   * @param params The `InterventionsService.DeleteProduitParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteProduitResponse(params: InterventionsService.DeleteProduitParams): __Observable<__StrictHttpResponse<InterventionClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/interventions/delete/produits/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionClientDto>;
      })
    );
  }
  /**
   * @param params The `InterventionsService.DeleteProduitParams` containing the following parameters:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  deleteProduit(params: InterventionsService.DeleteProduitParams): __Observable<InterventionClientDto> {
    return this.deleteProduitResponse(params).pipe(
      __map(_r => _r.body as InterventionClientDto)
    );
  }

  /**
   * @param idInterventionClient undefined
   */
  deleteResponse(idInterventionClient: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/interventions/delete/${encodeURIComponent(String(idInterventionClient))}`,
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
   * @param idInterventionClient undefined
   */
  delete(idInterventionClient: number): __Observable<null> {
    return this.deleteResponse(idInterventionClient).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codeInterventionClient undefined
   * @return successful operation
   */
  findByCodeResponse(codeInterventionClient: string): __Observable<__StrictHttpResponse<InterventionClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/interventions/filter/${encodeURIComponent(String(codeInterventionClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionClientDto>;
      })
    );
  }
  /**
   * @param codeInterventionClient undefined
   * @return successful operation
   */
  findByCode(codeInterventionClient: string): __Observable<InterventionClientDto> {
    return this.findByCodeResponse(codeInterventionClient).pipe(
      __map(_r => _r.body as InterventionClientDto)
    );
  }

  /**
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesClientByInterventionClientIdResponse(idCommande: number): __Observable<__StrictHttpResponse<Array<LigneInterventionClientDto>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/interventions/lignesCommande/${encodeURIComponent(String(idCommande))}`,
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
   * @param idCommande undefined
   * @return successful operation
   */
  findAllLignesCommandesClientByInterventionClientId(idCommande: number): __Observable<Array<LigneInterventionClientDto>> {
    return this.findAllLignesCommandesClientByInterventionClientIdResponse(idCommande).pipe(
      __map(_r => _r.body as Array<LigneInterventionClientDto>)
    );
  }

  /**
   * @param params The `InterventionsService.UpdateArticleParams` containing the following parameters:
   *
   * - `idProduit`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateArticleResponse(params: InterventionsService.UpdateArticleParams): __Observable<__StrictHttpResponse<InterventionClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/interventions/update/article/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.idProduit))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionClientDto>;
      })
    );
  }
  /**
   * @param params The `InterventionsService.UpdateArticleParams` containing the following parameters:
   *
   * - `idProduit`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateArticle(params: InterventionsService.UpdateArticleParams): __Observable<InterventionClientDto> {
    return this.updateArticleResponse(params).pipe(
      __map(_r => _r.body as InterventionClientDto)
    );
  }

  /**
   * @param params The `InterventionsService.UpdateClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `idClient`:
   *
   * @return successful operation
   */
  updateClientResponse(params: InterventionsService.UpdateClientParams): __Observable<__StrictHttpResponse<InterventionClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/interventions/update/client/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionClientDto>;
      })
    );
  }
  /**
   * @param params The `InterventionsService.UpdateClientParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `idClient`:
   *
   * @return successful operation
   */
  updateClient(params: InterventionsService.UpdateClientParams): __Observable<InterventionClientDto> {
    return this.updateClientResponse(params).pipe(
      __map(_r => _r.body as InterventionClientDto)
    );
  }

  /**
   * @param params The `InterventionsService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommandeResponse(params: InterventionsService.UpdateEtatCommandeParams): __Observable<__StrictHttpResponse<InterventionClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/interventions/update/etat/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.etatCommande))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionClientDto>;
      })
    );
  }
  /**
   * @param params The `InterventionsService.UpdateEtatCommandeParams` containing the following parameters:
   *
   * - `idCommande`:
   *
   * - `etatCommande`:
   *
   * @return successful operation
   */
  updateEtatCommande(params: InterventionsService.UpdateEtatCommandeParams): __Observable<InterventionClientDto> {
    return this.updateEtatCommandeResponse(params).pipe(
      __map(_r => _r.body as InterventionClientDto)
    );
  }

  /**
   * @param params The `InterventionsService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommandeResponse(params: InterventionsService.UpdateQuantiteCommandeParams): __Observable<__StrictHttpResponse<InterventionClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'PATCH',
      this.rootUrl + `/gestiondestock/v1/interventions/update/quantite/${encodeURIComponent(String(params.idCommande))}/${encodeURIComponent(String(params.idLigneCommande))}/${encodeURIComponent(String(params.quantite))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionClientDto>;
      })
    );
  }
  /**
   * @param params The `InterventionsService.UpdateQuantiteCommandeParams` containing the following parameters:
   *
   * - `quantite`:
   *
   * - `idLigneCommande`:
   *
   * - `idCommande`:
   *
   * @return successful operation
   */
  updateQuantiteCommande(params: InterventionsService.UpdateQuantiteCommandeParams): __Observable<InterventionClientDto> {
    return this.updateQuantiteCommandeResponse(params).pipe(
      __map(_r => _r.body as InterventionClientDto)
    );
  }

  /**
   * @param idInterventionClient undefined
   * @return successful operation
   */
  findByIdResponse(idInterventionClient: number): __Observable<__StrictHttpResponse<InterventionClientDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/interventions/${encodeURIComponent(String(idInterventionClient))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionClientDto>;
      })
    );
  }
  /**
   * @param idInterventionClient undefined
   * @return successful operation
   */
  findById(idInterventionClient: number): __Observable<InterventionClientDto> {
    return this.findByIdResponse(idInterventionClient).pipe(
      __map(_r => _r.body as InterventionClientDto)
    );
  }
}

module InterventionsService {

  /**
   * Parameters for deleteProduit
   */
  export interface DeleteProduitParams {
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateArticle
   */
  export interface UpdateArticleParams {
    idProduit: number;
    idLigneCommande: number;
    idCommande: number;
  }

  /**
   * Parameters for updateClient
   */
  export interface UpdateClientParams {
    idCommande: number;
    idClient: number;
  }

  /**
   * Parameters for updateEtatCommande
   */
  export interface UpdateEtatCommandeParams {
    idCommande: number;
    etatCommande: 'EN_PREPARATION' | 'VALIDEE' | 'LIVREE';
  }

  /**
   * Parameters for updateQuantiteCommande
   */
  export interface UpdateQuantiteCommandeParams {
    quantite: number;
    idLigneCommande: number;
    idCommande: number;
  }
}

export { InterventionsService }
