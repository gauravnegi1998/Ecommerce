import { Routes } from '@angular/router';
import { AuthGuardService } from '../services/AuthGuard.service';

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
            },
            {
                path: 'listing',
                loadComponent: () => import('./Pages/userListing/userListing.component').then((m) => m.UserListingComponent),
                pathMatch: 'full',
                canActivate: [AuthGuardService]
            },
            {
                path: 'detail/:id',
                loadComponent: () => import('./Pages/detail-page/detail-page.component').then((m) => m.DetailPageComponent),
                pathMatch: 'full',
                canActivate: [AuthGuardService]
            },
            {
                path: "edit/:id",
                loadComponent: () => import('./Auth/update-profile/update-profile.component').then(r => r.UpdateProfileComponent),
                canActivate: [AuthGuardService]

            },
            {
                path: 'products',
                loadChildren: () => import('./ProductPages/ProductPage-routes').then(features => features.ProductPagesRoutes),
            },
            {
                path: '**',
                loadComponent: () => import('./404NotFound/404NotFound.component').then(r => r.FourZeroFourComponent),
                pathMatch: 'full',
            }
        ]
    },
];
