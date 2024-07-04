import { Component } from '@angular/core';
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
export class NouveauProduitComponent {

}
