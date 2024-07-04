import { Component } from '@angular/core';
import { InterDetailsComponent } from '../inter-details/inter-details.component';

@Component({
  selector: 'app-nouvelle-inter',
  standalone: true,
  imports: [
    InterDetailsComponent
  ],
  templateUrl: './nouvelle-inter.component.html',
  styleUrl: './nouvelle-inter.component.css'
})
export class NouvelleInterComponent {

}
