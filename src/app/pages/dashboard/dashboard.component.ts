import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderDashboardComponent } from '../../components/header-dashboard/header-dashboard.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { AccueilPageComponent } from '../accueil-page/accueil-page.component';
import { ProduitsComponent } from '../produits/produits.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    AccueilPageComponent,
    HeaderDashboardComponent,
    MenuComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
}
