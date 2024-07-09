import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-categorie',
  standalone: true,
  imports: [],
  templateUrl: './nouvelle-categorie.component.html',
  styleUrls: ['./nouvelle-categorie.component.css']
})
export class NouvelleCategorieComponent implements OnInit {

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
    this.router.navigate(['categorie']); // Rediriger toujours vers la page 'categorie'
  }
}