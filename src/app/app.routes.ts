import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'about', component: AboutComponent }, // About page
    { path: 'contact', component: ContactComponent }, // Contact page
    { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect unknown paths to Home
  ];
  