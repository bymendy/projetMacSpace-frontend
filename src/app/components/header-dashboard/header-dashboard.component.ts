import { Component } from '@angular/core';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

@Component({
  selector: 'app-header-dashboard',
  standalone: true,
  imports: [
    DashboardComponent,
  ],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.css'
})
export class HeaderDashboardComponent {

}
