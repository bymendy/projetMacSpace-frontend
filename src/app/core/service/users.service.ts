import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

// Utilisation du décorateur @Injectable pour indiquer que cette classe peut être injectée en tant que service
@Injectable({
  providedIn: 'root' // Fournit le service au niveau de la racine de l'application
})
export class UsersService {

  // Injection du service HttpClient dans le constructeur pour effectuer des requêtes HTTP
  constructor(private httpClient: HttpClient) { }

  // Méthode pour enregistrer un nouvel utilisateur
  // Prend un objet de type Users en paramètre et retourne un Observable de type Users
  register(user: Users): Observable<Users> {
    // Effectue une requête POST vers l'URL spécifiée pour enregistrer l'utilisateur
    return this.httpClient.post<Users>('http://localhost:3306/api/open/register', user);
  }

  // Méthode pour connecter un utilisateur
  // Prend un objet contenant les données de connexion (email et mot de passe) en paramètre et retourne un Observable de type any
  login(data: any): Observable<any> { 
    // Effectue une requête POST vers l'URL spécifiée pour connecter l'utilisateur
    return this.httpClient.post<any>('http://localhost:3306/api/open/login', data);
  }
}