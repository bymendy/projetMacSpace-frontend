import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-mdp-profil',
  standalone: true,
  imports: [],
  templateUrl: './change-mdp-profil.component.html',
  styleUrl: './change-mdp-profil.component.css'
})
export class ChangeMdpProfilComponent implements OnInit {

  constructor(
    private router: Router
  ) { } 

  ngOnInit(): void {
      
  }
  
  cancel(): void {
    this.router.navigate(['profil']);
  }
}

