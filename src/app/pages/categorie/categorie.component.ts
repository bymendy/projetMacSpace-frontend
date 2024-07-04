import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [
    ButtonActionComponent,
    PaginationComponent
  ],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent implements OnInit {

  constructor(
    private router: Router
  ) { } 

  ngOnInit(): void {
      
  }
  
  nouvelleCategorie(): void {
    this.router.navigate(['nouvellecategorie']);
  }
}
