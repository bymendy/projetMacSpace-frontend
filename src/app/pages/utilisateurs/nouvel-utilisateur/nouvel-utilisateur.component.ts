import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrls: ['./nouvel-utilisateur.component.css']
})
export class NouvelUtilisateurComponent implements OnInit {

  origin = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      if (data && 'origin' in data) {  // Vérification de la présence de la propriété 'origin'
        this.origin = data['origin']; // Utilisation de l'accès via ['origin']
      }
    });
  }

  saveClick(): void {
    // Logique de sauvegarde
  }

  cancel(): void {
    this.router.navigate(['utilisateur']); // Rediriger vers la page 'utilisateur'
  }
}