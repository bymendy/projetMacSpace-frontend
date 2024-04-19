import { Routes } from '@angular/router';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

export const routes: Routes = [
    {
        path: "", 
        component: AccueilPageComponent
    },
    {
        path: "**", // 
        component: NotfoundPageComponent
    }
];
