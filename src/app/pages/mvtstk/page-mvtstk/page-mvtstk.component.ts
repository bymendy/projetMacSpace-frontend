import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonActionComponent } from '../../../components/button-action/button-action.component';
import { DetailsMvtStkProduitsComponent } from '../../../components/details-mvt-stk-produits/details-mvt-stk-produits.component';
import { DetailsMvtStkComponent } from '../../../components/details-mvt-stk/details-mvt-stk.component';
import { PaginationComponent } from '../../../components/pagination/pagination.component';

@Component({
  selector: 'app-page-mvtstk',
  standalone: true,
  imports: [
    DetailsMvtStkProduitsComponent,
    DetailsMvtStkComponent, 
    ButtonActionComponent,
    PaginationComponent,
    CommonModule
  ],
  templateUrl: './page-mvtstk.component.html',
  styleUrl: './page-mvtstk.component.css'
})
export class PageMvtstkComponent {

}
