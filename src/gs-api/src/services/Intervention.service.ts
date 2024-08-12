/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { InterventionsDto } from '../models/interventions-dto';
@Injectable({
  providedIn: 'root',
})
class InterventionService extends __BaseService {
  static readonly findAllPath = '/gestiondestock/v1/interventions/all';
  static readonly savePath = '/gestiondestock/v1/interventions/create';
  static readonly deletePath = '/gestiondestock/v1/interventions/delete/{idVente}';
  static readonly findByCodePath = '/gestiondestock/v1/interventions/{codeIntervention}';
  static readonly findByIdPath = '/gestiondestock/v1/interventions/{idVente}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return successful operation
   */
  findAllResponse(): __Observable<__StrictHttpResponse<Array<InterventionsDto>>> {
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
        return _r as __StrictHttpResponse<Array<InterventionsDto>>;
      })
    );
  }
  /**
   * @return successful operation
   */
  findAll(): __Observable<Array<InterventionsDto>> {
    return this.findAllResponse().pipe(
      __map(_r => _r.body as Array<InterventionsDto>)
    );
  }

  /**
   * @param body undefined
   * @return successful operation
   */
  saveResponse(body?: InterventionsDto): __Observable<__StrictHttpResponse<InterventionsDto>> {
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
        return _r as __StrictHttpResponse<InterventionsDto>;
      })
    );
  }
  /**
   * @param body undefined
   * @return successful operation
   */
  save(body?: InterventionsDto): __Observable<InterventionsDto> {
    return this.saveResponse(body).pipe(
      __map(_r => _r.body as InterventionsDto)
    );
  }

  /**
   * @param idVente undefined
   */
  deleteResponse(idVente: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/gestiondestock/v1/interventions/delete/${encodeURIComponent(String(idVente))}`,
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
   * @param idVente undefined
   */
  delete(idVente: number): __Observable<null> {
    return this.deleteResponse(idVente).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param codeIntervention undefined
   * @return successful operation
   */
  findByCodeResponse(codeIntervention: string): __Observable<__StrictHttpResponse<InterventionsDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/interventions/${encodeURIComponent(String(codeIntervention))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionsDto>;
      })
    );
  }
  /**
   * @param codeIntervention undefined
   * @return successful operation
   */
  findByCode(codeIntervention: string): __Observable<InterventionsDto> {
    return this.findByCodeResponse(codeIntervention).pipe(
      __map(_r => _r.body as InterventionsDto)
    );
  }

  /**
   * @param idVente undefined
   * @return successful operation
   */
  findByIdResponse(idVente: number): __Observable<__StrictHttpResponse<InterventionsDto>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/gestiondestock/v1/interventions/${encodeURIComponent(String(idVente))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<InterventionsDto>;
      })
    );
  }
  /**
   * @param idVente undefined
   * @return successful operation
   */
  findById(idVente: number): __Observable<InterventionsDto> {
    return this.findByIdResponse(idVente).pipe(
      __map(_r => _r.body as InterventionsDto)
    );
  }
}

module InterventionService {
}

export { InterventionService }
