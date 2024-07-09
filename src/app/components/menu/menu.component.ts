import { Component, OnInit } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Menu } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fas fa-chart-pie',
          url: '',
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fas fa-chart-bar',
          url: 'statistiques',
        }
      ]
    },
    {
      id: '2',
      titre: 'Produits',
      icon: 'fas fa-boxes',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Produits',
          icon: 'fas fa-boxes',
          url: 'produits',
        },
        {
          id: '22',
          titre: 'Mouvements du Stock',
          icon: 'fab fa-stack-overflow',
          url: 'mvtstk',
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fas fa-users',
          url: 'clients',
        },
        {
          id: '32',
          titre: 'Interventions clients',
          icon: 'fa-solid fa-screwdriver-wrench',
          url: 'interventions',
        }
      ]
    },
    {
      id: '4',
      titre: 'Nos Fournisseurs',
      icon: 'fas fa-truck',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fas fa-truck',
          url: 'fournisseurs',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fa-brands fa-product-hunt',
          url: 'commandefournisseurs',
        }
      ]
    },
    {
      id: '5',
      titre: 'Paramétrages',
      icon: 'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categorie',
          icon: 'fa-solid fa-list',
          url: 'categorie',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fas fa-users-cog',
          url: 'utilisateur',
        }
      ]
    }
  ];
  
  private lastSelectedMenu : Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { 

  }
  navigate(menu: Menu): void {
    if (this.lastSelectedMenu){
      this.lastSelectedMenu.active= false;
    }
    menu.active= true;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu= menu;
  }
}