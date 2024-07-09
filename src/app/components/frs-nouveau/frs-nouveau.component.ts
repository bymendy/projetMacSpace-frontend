import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frs-nouveau',
  standalone: true,
  imports: [],
  templateUrl: './frs-nouveau.component.html',
  styleUrl: './frs-nouveau.component.css'
})
export class FrsNouveauComponent implements OnInit {

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

  cancelClick(): void {
    if (this.origin === 'clients') {
      this.router.navigate(['clients']);
    } else if (this.origin === 'fournisseurs') {
      this.router.navigate(['fournisseurs']);
    }
  }
}

