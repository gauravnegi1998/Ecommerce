import { Routes } from "@angular/router";
import { CategoriesComponent } from "./Categories/categories.component";
import { ProductPageComponent } from "./product-page.component";

export const ProductPagesRoutes: Routes = [
    {
        path: '',
        component: ProductPageComponent, // do not define a component here, instead just define child routes
        children: [
            { path: 'categories', component: CategoriesComponent, pathMatch: 'full' },
            { path: 'check', component: CategoriesComponent, pathMatch: 'full' },
            { path: '', redirectTo: 'categories', pathMatch: 'full' }
        ]
    }
];