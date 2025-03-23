import type { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
  {
    path: 'signin',
    loadComponent: () =>
      import('./components/auth/signin/signin.component').then(
        (m) => m.SignInComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/auth/signup/signup.component').then(
        (m) => m.SignUpComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/signin' },
];
