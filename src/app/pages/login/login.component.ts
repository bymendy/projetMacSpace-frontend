import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user/user.service';
import { AdresseDto, AuthenticationRequest, EntrepriseDto } from '../../../gs-api/src/models';
import { EntreprisesService } from '../../../gs-api/src/services';

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
  public errorMessage: string = ''; // Message d'erreur pour l'affichage des erreurs
  public errorsMsg: Array<string> = []; // Tableau pour les messages d'erreur d'inscription
  
  // login
  authenticationRequest: AuthenticationRequest = {}; // Objet pour les données de connexion

  // inscription
  entrepriseDto: EntrepriseDto = {}; // Objet pour les données d'inscription de l'entreprise
  adresse: AdresseDto = {}; // Objet pour les données de l'adresse

  // Injection des services nécessaires et du routeur
  constructor(
    private userService: UserService, // Service pour gérer les utilisateurs
    private entrepriseService: EntreprisesService, // Service pour gérer les entreprises
    private router: Router // Service pour la navigation
  ) {}

  // Méthode ngOnInit appelée à l'initialisation du composant
  ngOnInit(): void {
    this.createForms(); // Création des formulaires pour la connexion et l'inscription
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
      this.authenticationRequest = {
        login: this.formLogin.value.email,
        password: this.formLogin.value.password
      };

      this.userService.login(this.authenticationRequest).subscribe({
        next: (response) => { // En cas de succès
          this.userService.setAccessToken(response); // Enregistre le token d'accès
          this.getUserByEmail(this.authenticationRequest.login); // Récupère les informations de l'utilisateur par e-mail
        },
        error: () => { // En cas d'erreur
          this.errorMessage = 'Login et / ou mot de passe incorrecte'; // Affiche un message d'erreur
        }
      });
    } else {
      console.error("Le formulaire de connexion n'est pas valide."); // Affiche un message d'erreur si le formulaire n'est pas valide
    }
  }

  // Méthode pour soumettre le formulaire d'inscription
  submitRegisterForm(): void {
    if (this.formRegister.valid) { // Vérifie si le formulaire d'inscription est valide
      this.entrepriseDto.adresse = this.adresse; // Ajoute l'adresse à l'objet entrepriseDto
      this.entrepriseDto.name = this.formRegister.value.name;
      this.entrepriseDto.email = this.formRegister.value.email;
      this.entrepriseDto.password = this.formRegister.value.password;

      // Appelle la méthode inscrire du service EntreprisesService
      this.entrepriseService.sinscrire(this.entrepriseDto).subscribe({
        next: () => { // En cas de succès
          this.connectEntreprise(); // Connecte l'entreprise après l'inscription
        },
        error: (error) => { // En cas d'erreur
          this.errorsMsg = error.error.errors; // Affiche les erreurs reçues du serveur
        }
      });
    } else {
      console.error("Le formulaire d'inscription n'est pas valide."); // Affiche un message d'erreur si le formulaire n'est pas valide
    }
  }

  // Méthode pour connecter l'entreprise après l'inscription
  connectEntreprise(): void {
    const authenticationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.email, // Email utilisé pour la connexion
      password: this.formRegister.value.password // Mot de passe pour la connexion
    };
    
    this.userService.login(authenticationRequest).subscribe({
      next: (response) => { // En cas de succès
        this.userService.setAccessToken(response); // Enregistre le token d'accès
        this.getUserByEmail(authenticationRequest.login); // Récupère les informations de l'utilisateur par e-mail
        localStorage.setItem('origin', 'inscription'); // Stocke l'origine de l'inscription dans le localStorage
        this.router.navigate(['changemdpprofil']); // Redirige vers la page de changement de mot de passe
      },
      error: () => { // En cas d'erreur
        this.errorMessage = 'Erreur lors de la connexion après l\'inscription'; // Affiche un message d'erreur
      }
    });
  }

  // Méthode pour récupérer les informations de l'utilisateur par e-mail
  getUserByEmail(email?: string): void {
    if (email) {
      this.userService.getUserByEmail(email).subscribe({
        next: (user) => {
          this.userService.setConnectedUser(user); // Enregistre les informations de l'utilisateur connecté
        },
        error: () => {
          this.errorMessage = 'Erreur lors de la récupération des informations de l\'utilisateur'; // Affiche un message d'erreur si la récupération échoue
        }
      });
    }
  }
}