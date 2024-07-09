import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { UtilisateurDetailsComponent } from '../../components/utilisateur-details/utilisateur-details.component';

@Component({
  selector: 'app-utilisateurs',
  standalone: true,
  imports: [
    PaginationComponent,
    ButtonActionComponent,
    UtilisateurDetailsComponent
  ],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.css'
})
export class UtilisateursComponent implements OnInit {

  constructor(
    private router: Router
  ) { } 

  ngOnInit(): void {
      
  }
  
  nouvelUtilisateur(): void {
    this.router.navigate(['nouvelutilisateur']);
  }
}
