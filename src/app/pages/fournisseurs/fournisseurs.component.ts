import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { CltFrsDetailsComponent } from '../../components/clt-frs-details/clt-frs-details.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-fournisseurs',
  standalone: true,
  imports: [
    ButtonActionComponent,
    PaginationComponent,
    CltFrsDetailsComponent
  ],
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nouveauFournisseur(): void {
    this.router.navigate(['nouveaufournisseur']);
  }
}