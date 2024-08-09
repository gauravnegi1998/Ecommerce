import { Routes } from "@angular/router";
import { CategoriesComponent } from "./Categories/categories.component";
import { ProductPageComponent } from "./product-page.component";
import { AddProductComponent } from "./AddProduct/addProduct.component";

export const ProductPagesRoutes: Routes = [
    {
        path: '',
        component: ProductPageComponent, // do not define a component here, instead just define child routes
        children: [
            { path: 'add-product', component: AddProductComponent, pathMatch: 'full' },
            { path: 'categories', component: CategoriesComponent, pathMatch: 'full' },
            { path: 'check', component: CategoriesComponent, pathMatch: 'full' },
            { path: '', redirectTo: 'add-product', pathMatch: 'full' }
        ]
    }
];