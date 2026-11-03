import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./login/login').then((component) => component.Login) },
  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard').then((component) => component.Dashboard) },
  { path: 'dashboard2', loadComponent: () => import('./dashboard2/dashboard2').then((component) => component.Dashboard2) },
  { path: 'dashboard3', loadComponent: () => import('./dashboard3/dashboard3').then((component) => component.Dashboard3) },
  { path: 'admin', loadComponent: () => import('./admin/admin').then((component) => component.Admin) },
];
