import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProduitsComponent } from '../produits.component';

@Component({
  selector: 'app-nouveau-produit',
  standalone: true,
  imports: [
    ProduitsComponent
  ],
  templateUrl: './nouveau-produit.component.html',
  styleUrl: './nouveau-produit.component.css'
})
export class NouveauProduitComponent implements OnInit {

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
      this.router.navigate(['produits']);
  }
}