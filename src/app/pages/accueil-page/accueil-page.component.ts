import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-accueil-page',
  standalone: true,
  imports: [
    NavbarComponent,
  ],
  templateUrl: './accueil-page.component.html',
  styleUrl: './accueil-page.component.css'
})
export class AccueilPageComponent {

}
