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
                path: 'about',
                pathMatch: "full",
                loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
            },
            {
                path: 'contactus',
                pathMatch: "full",
                loadComponent: () => import('./Pages/collections/collection.component').then((m) => m.CollectionsComponent),
            },
            {
                path: 'signin',
                pathMatch: "full",
                loadComponent: () => import('./Pages/Auth/login/login.component').then((m) => m.LoginComponent),
                canActivate: [AuthGuardService]
            },
            {
                path: 'signup',
                pathMatch: 'full',
                loadComponent: () => import('./Pages/Auth/signup/signup.component').then((m) => m.SignupComponent)
            },
            {
                path: 'listing',
                loadComponent: () => import('./Pages/Users/userListing/userListing.component').then((m) => m.UserListingComponent),
                pathMatch: 'full',
                canActivate: [AuthGuardService]
            },
            {
                path: 'detail/:id',
                loadComponent: () => import('./Pages/Users/detail-page/detail-page.component').then((m) => m.DetailPageComponent),
                pathMatch: 'full',
                canActivate: [AuthGuardService]
            },
            {
                path: "edit/:id",
                loadComponent: () => import('./Pages/Auth/update-profile/update-profile.component').then(r => r.UpdateProfileComponent),
                canActivate: [AuthGuardService]

            },
            {
                path: 'products',
                loadChildren: () => import('./Pages/ProductPages/ProductPage-routes').then(features => features.ProductPagesRoutes),
            },
            {
                path: 'collections',
                loadChildren: () => import('./Pages/collections/collection-routes').then((m) => m.CollectionsComponentRoutes),
            },
            {
                path: '**',
                loadComponent: () => import('./404NotFound/404NotFound.component').then(r => r.FourZeroFourComponent),
                pathMatch: 'full',
            }
        ]
    },
];
