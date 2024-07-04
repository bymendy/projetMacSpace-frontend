import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { DetailsProduitsComponent } from '../../components/details-produits/details-produits.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { NouveauProduitComponent } from './nouveau-produit/nouveau-produit.component';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [
    DetailsProduitsComponent,
    PaginationComponent,
    ButtonActionComponent,
    NouveauProduitComponent
  ],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {

    constructor(
      private router: Router
    ) { } 

    ngOnInit(): void {
        
    }
    
    nouveauProduit(): void {
      this.router.navigate(['nouveauproduit']);
    }
}
