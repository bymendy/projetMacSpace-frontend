import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
export class NouvelleInterComponent implements OnInit {

  constructor(
    private router: Router
  ) { } 

  ngOnInit(): void {
      
  }
  
  cancel(): void {
    this.router.navigate(['interventions']);
  }
}

