import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Layout/layout.component').then((m) => m.LayoutComponent),
        children: [
            {
                path: '',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'products',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'collections',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'about',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'contactus',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'signin',
                pathMatch: "full",
                loadComponent: () => import('./Auth/login/login.component').then((m) => m.LoginComponent)
            },
            {
                path: 'signup',
                pathMatch: 'full',
                loadComponent: () => import('./Auth/signup/signup.component').then((m) => m.SignupComponent)
            }
        ]
    },
];
