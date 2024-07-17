import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UsersService } from '../../core/service/users.service';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Décorateur @Component pour définir les métadonnées du composant
@Component({
  selector: 'app-login', // Sélecteur du composant
  standalone: true, // Indique que le composant est autonome (peut être utilisé sans faire partie d'un module NgModule)
  imports: [ // Modules importés
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html', // Chemin du fichier de template
  styleUrls: ['./login.component.css'] // Chemin du fichier de styles
})
export class LoginComponent implements OnInit { // Implémente OnInit pour initialiser le composant

  public formLogin!: FormGroup; // FormGroup pour le formulaire de connexion
  public formRegister!: FormGroup; // FormGroup pour le formulaire d'inscription
  public isLoggedIn: boolean = false; // État de connexion de l'utilisateur

  // Injection du service UsersService et du service Router
  constructor(
    private usersService: UsersService, 
    private router: Router
    ) {}

  // Méthode ngOnInit appelée à l'initialisation du composant
  ngOnInit(): void {
    this.createForms(); // Appel de la méthode pour créer les formulaires
  }

  // Méthode pour créer les formulaires de connexion et d'inscription
  createForms(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), // Champ email avec validation
      password: new FormControl('', Validators.required) // Champ password avec validation
    });

    this.formRegister = new FormGroup({
      name: new FormControl('', Validators.required), // Champ name avec validation
      email: new FormControl('', [Validators.required, Validators.email]), // Champ email avec validation
      password: new FormControl('', Validators.required) // Champ password avec validation
    });
  }

  // Méthode pour soumettre le formulaire de connexion
  submitLoginForm(): void {
    if (this.formLogin.valid) { // Vérifie si le formulaire de connexion est valide
      const formData = this.formLogin.value; // Récupère les données du formulaire
      this.usersService.login(formData).subscribe({ // Appelle la méthode login du service UsersService
        next: (response) => { // En cas de succès
          if (response.token) { // Vérifie si un token est reçu
            localStorage.setItem('token', response.token); // Stocke le token dans le localStorage
            this.router.navigate(['/dashboard']); // Redirige vers le tableau de bord
            this.formLogin.reset(); // Réinitialise le formulaire
          }
        },
        error: (error) => { // En cas d'erreur
          console.error("Erreur lors de la connexion :", error); // Affiche l'erreur dans la console
        }
      });
    } else {
      console.error("Le formulaire de connexion n'est pas valide."); // Affiche un message d'erreur si le formulaire n'est pas valide
    }
  }

  // Méthode pour soumettre le formulaire d'inscription
  submitRegisterForm(): void {
    if (this.formRegister.valid) { // Vérifie si le formulaire d'inscription est valide
      const formData = this.formRegister.value; // Récupère les données du formulaire
      this.usersService.register(formData).subscribe({ // Appelle la méthode register du service UsersService
        next: (response) => { // En cas de succès
          console.log('Utilisateur enregistré avec succès:', response); // Affiche le succès dans la console
          this.formRegister.reset(); // Réinitialise le formulaire
          // Optionnel: Redirige l'utilisateur vers la page de connexion après l'inscription
          this.router.navigate(['/login']);
        },
        error: (error) => { // En cas d'erreur
          console.error("Erreur lors de l'inscription :", error); // Affiche l'erreur dans la console
        }
      });
    } else {
      console.error("Le formulaire d'inscription n'est pas valide."); // Affiche un message d'erreur si le formulaire n'est pas valide
    }
  }
}