import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CmdDetailsComponent } from '../cmd-details/cmd-details.component';
import { DetailsProduitsComponent } from '../details-produits/details-produits.component';

@Component({
  selector: 'app-nouvelle-cmd-frs',
  standalone: true,
  imports: [
    DetailsProduitsComponent,
    CmdDetailsComponent
  ],
  templateUrl: './nouvelle-cmd-frs.component.html',
  styleUrl: './nouvelle-cmd-frs.component.css'
})
export class NouvelleCmdFrsComponent implements OnInit {

  constructor(
    private router: Router
  ) { } 

  ngOnInit(): void {
      
  }
  
  cancel(): void {
    this.router.navigate(['commandefournisseurs']);
  }
}

