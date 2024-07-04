import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { CltFrsDetailsComponent } from '../../components/clt-frs-details/clt-frs-details.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    ButtonActionComponent,
    PaginationComponent,
    CltFrsDetailsComponent
  ],
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nouveauClient(): void {
    this.router.navigate(['nouveauclient']);
  }
}