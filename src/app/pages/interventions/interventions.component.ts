import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { InterClientsComponent } from '../../components/inter-clients/inter-clients.component';
import { InterDetailsComponent } from '../../components/inter-details/inter-details.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-interventions',
  standalone: true,
  imports: [
    ButtonActionComponent,
    PaginationComponent,
    InterClientsComponent,
    InterDetailsComponent
  ],
  templateUrl: './interventions.component.html',
  styleUrl: './interventions.component.css'
})
export class InterventionsComponent implements  OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nouvelleInter(): void {
    this.router.navigate(['nouvelleinterventionclient']);
  }
}