// Importations nécessaires pour le service
import { Injectable } from '@angular/core'; // Importation de l'annotation Injectable pour les services
import { HttpClient } from '@angular/common/http'; // Importation de HttpClient pour effectuer des requêtes HTTP
import { Observable } from 'rxjs'; // Importation d'Observable pour gérer les données asynchrones
import { Client } from '../model/client'; // Importation du modèle Client pour typer les données

@Injectable({
  providedIn: 'root' // Fournit le service à la racine de l'application, le rendant disponible partout
})
export class ClientService {
  // URL de l'API backend (à ajuster selon votre configuration)
  private apiUrl = 'http://localhost:3306/';

  // Constructeur injectant HttpClient pour effectuer les requêtes HTTP
  constructor(private http: HttpClient) {}

  // Méthode pour récupérer la liste des clients
  getClients(): Observable<Client[]> {
    // Effectue une requête GET à l'API et retourne un Observable contenant un tableau de clients
    return this.http.get<Client[]>(this.apiUrl);
  }

  // Méthode pour ajouter un nouveau client
  addClient(client: Client): Observable<Client> {
    // Effectue une requête POST à l'API avec les données du nouveau client et retourne un Observable contenant le client ajouté
    return this.http.post<Client>(this.apiUrl, client);
  }

  // Autres méthodes pour update et delete peuvent être ajoutées icin
  // Exemple de méthode pour mettre à jour un client
  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/clients`, client);
  }

  // Exemple de méthode pour supprimer un client
  deleteClient(clientId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${clientId}`);
  }
}