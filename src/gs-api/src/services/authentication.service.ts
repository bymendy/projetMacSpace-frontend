/* tslint:disable */
/**
 * @fileoverview
 * Ce fichier contient l'implémentation de la classe `AuthenticationService`, qui fournit des méthodes pour l'authentification des utilisateurs contre l'API.
 * Le service utilise `HttpClient` d'Angular pour effectuer des requêtes HTTP vers l'API backend.
 */

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { AuthenticationResponse } from '../models/authentication-response';
import { AuthenticationRequest } from '../models/authentication-request';

/**
 * Le `AuthenticationService` est un service Angular qui fournit des méthodes pour authentifier les utilisateurs via l'API.
 * Il étend la classe `BaseService` et utilise `HttpClient` d'Angular pour effectuer des requêtes HTTP.
 * 
 * @class
 */
@Injectable({
  providedIn: 'root',
})
class AuthenticationService extends __BaseService {
  /**
   * Le chemin pour le point de terminaison de l'API d'authentification.
   * 
   * @static
   * @type {string}
   */
  static readonly authenticatePath = '/gestiondestock/v1/auth/authenticate';

  /**
   * Crée une instance de `AuthenticationService`.
   * 
   * @param {__Configuration} config - L'objet de configuration de l'API contenant l'URL de base et d'autres paramètres de configuration.
   * @param {HttpClient} http - L'instance de `HttpClient` d'Angular pour effectuer des requêtes HTTP.
   */
  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Effectue une requête POST vers le point de terminaison d'authentification pour obtenir un jeton d'authentification.
   * 
   * @param {AuthenticationRequest} [body] - Le corps de la requête contenant les informations d'identification de l'utilisateur.
   * @return {__Observable<__StrictHttpResponse<AuthenticationResponse>>} Un observable de la réponse HTTP contenant le jeton d'authentification.
   * 
   * @description
   * Cette méthode crée un nouvel objet `HttpRequest` pour la requête POST vers l'API d'authentification.
   * Elle utilise `HttpClient` pour envoyer la requête et retourne un observable de la réponse HTTP.
   */
  authenticateResponse(body?: AuthenticationRequest): __Observable<__StrictHttpResponse<AuthenticationResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + AuthenticationService.authenticatePath, // Utilise le chemin statique pour le point de terminaison de l'API
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<AuthenticationResponse>;
      })
    );
  }

  /**
   * Appelle la méthode `authenticateResponse` pour effectuer l'authentification et retourne le jeton d'authentification.
   * 
   * @param {AuthenticationRequest} [body] - Le corps de la requête contenant les informations d'identification de l'utilisateur.
   * @return {__Observable<AuthenticationResponse>} Un observable de la réponse d'authentification contenant le jeton d'authentification.
   * 
   * @description
   * Cette méthode appelle `authenticateResponse` pour obtenir la réponse HTTP et extrait le `body` de la réponse.
   * Elle retourne un observable de l'objet `AuthenticationResponse`.
   */
  authenticate(body?: AuthenticationRequest): __Observable<AuthenticationResponse> {
    return this.authenticateResponse(body).pipe(
      __map(_r => _r.body as AuthenticationResponse)
    );
  }
}

/**
 * Un module pour la classe `AuthenticationService`. Ce module est actuellement vide mais peut être utilisé pour de futures extensions.
 * 
 * @module
 */
module AuthenticationService {
}

export { AuthenticationService }