import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonActionComponent } from '../../components/button-action/button-action.component';
import { CmdDetailsComponent } from '../../components/cmd-details/cmd-details.component';
import { CmdFrsComponent } from '../../components/cmd-frs/cmd-frs.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-cmd-fournisseurs',
  standalone: true,
  imports: [
    ButtonActionComponent,
    PaginationComponent,
    CmdDetailsComponent,
    CmdFrsComponent

  ],
  templateUrl: './cmd-fournisseurs.component.html',
  styleUrl: './cmd-fournisseurs.component.css'
})
export class CmdFournisseursComponent implements  OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nouvelleCommande(): void {
    this.router.navigate(['nouvellecommandefournisseurs']);
  }
}