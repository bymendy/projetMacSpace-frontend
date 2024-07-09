import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { ChangeMdpProfilComponent } from '../../components/change-mdp-profil/change-mdp-profil.component';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [
    ButtonActionComponent,
    ChangeMdpProfilComponent
  ],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  modifierMotDePasse(): void {
    this.router.navigate(['changemdpprofil']);
  }
}
