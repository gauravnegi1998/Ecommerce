import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { InputModules } from "../../inputs/inputs.module";
import { FormsModule } from "@angular/forms";
import { ProductsServices } from "../../../services/ProductsServices.service";
import { ActivatedRoute, Router, RouterModule, RouterOutlet, Routes } from "@angular/router";
import { Subject } from "rxjs";

@Component({
    selector: "app-collections",
    standalone: true,
    imports: [CommonModule, InputModules, RouterModule, FormsModule, RouterOutlet],
    templateUrl: './collection.component.html',
    styleUrl: './collection.component.scss',
})

export class CollectionsComponent implements OnInit {

    catData: { _id: string, categoryId: number, categoryName: string }[] = [];
    productsDisplayObserve$ = new Subject<boolean>()
    productsDisplay: boolean = false;
    constructor(private router: Router, private ProductService: ProductsServices, private route: ActivatedRoute) { }


    ngOnInit(): void {
        this._getCategoriesData();
        this.ProductService.categoryData$.subscribe((response) => {
            this.catData = response ? response : [];
        })
        this.productsDisplayObserve$.subscribe((r) => {
            this.productsDisplay = (this.router.url).includes('products') ? true : false;
        })

        console.log(this.route, "this.activeRoutes,this.route")
    }


    _getCategoriesData() {
        this.ProductService._getCategories({ page: 1, limit: 100 })
        // this.config.totalItems = this.categories.length;
    }


    _handleCategoryClick(id: string) {
        this.productsDisplayObserve$.next(true)
        this.router.navigate(['/collections/products'], {
            queryParams: { id: id }
        })
    }
}