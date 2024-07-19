import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

/**
 * Le `ApplicationGuardService` est un service de garde de route qui vérifie si une route peut être activée ou non.
 * 
 * Ce service implémente l'interface `CanActivate` d'Angular, ce qui permet de définir des conditions sous lesquelles une route peut être accédée.
 * 
 * @class
 * @implements {CanActivate}
 */
@Injectable({
  providedIn: 'root'
})
export class ApplicationGuardService implements CanActivate {

  /**
   * Crée une instance du service `ApplicationGuardService`.
   * 
   * Ce constructeur est actuellement vide mais peut être étendu pour ajouter des dépendances ou des initialisations supplémentaires si nécessaire.
   */
  constructor(
    private userService: UserService
  ) { }
  /**
   * Détermine si une route peut être activée ou non.
   * 
   * Cette méthode est appelée lorsque l'utilisateur tente d'accéder à une route protégée par ce garde.
   * 
   * @param {ActivatedRouteSnapshot} route - Représente le moment précis où l'utilisateur essaie d'accéder à la route.
   * @param {RouterStateSnapshot} state - Représente l'état de l'application à un instant donné, incluant la route demandée.
   * @return {Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree} 
   *   Retourne un booléen ou un `UrlTree` (ou une Observable/Promise contenant ces valeurs) pour permettre ou empêcher l'accès à la route.
   *   - `true` permet l'accès à la route.
   *   - `false` empêche l'accès à la route.
   *   - `UrlTree` permet de rediriger l'utilisateur vers une autre route.
   * 
   * @example
   * ```typescript
   * canActivate(
   *   route: ActivatedRouteSnapshot,
   *   state: RouterStateSnapshot
   * ): boolean | UrlTree {
   *   // Exemple simple permettant toujours l'accès à la route
   *   return true;
   * }
   * ```
   */
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // return this.userService.isUserLoggedAndAccessTokenValid();
      return true;
    }
}