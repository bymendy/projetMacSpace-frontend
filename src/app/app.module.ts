import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Assurez-vous d'importer RouterModule

import { AppComponent } from './app.component';
import { ButtonActionComponent } from './components/button-action/button-action.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDashboardComponent,
    ButtonActionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }