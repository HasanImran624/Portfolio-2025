import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    loadComponent() {
      return import('./app.component').then(c => c.AppComponent);
    }
  },
];