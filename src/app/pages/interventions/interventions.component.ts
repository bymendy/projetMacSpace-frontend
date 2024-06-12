import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-interventions',
  standalone: true,
  imports: [

    NavbarComponent,
    FooterComponent,

  ],
  templateUrl: './interventions.component.html',
  styleUrl: './interventions.component.css'
})
export class InterventionsComponent {

}
