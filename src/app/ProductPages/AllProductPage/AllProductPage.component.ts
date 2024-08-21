import { Component, OnInit } from "@angular/core";
import { ProductsServices } from "../../../services/ProductsServices.service";
import { PaginationInstance } from "ngx-pagination";

@Component({
    selector: "app-allProductPage",
    standalone: true,
    imports: [],
    templateUrl: './AllProductPage.component.html',
    styleUrl: './AllProductPage.component.scss'
})

export class AllProductPageComponent implements OnInit {

    productLists: [] = [];
    config: PaginationInstance = {
        totalItems: 10,
        itemsPerPage: 9,
        id: "AllProductPage",
        currentPage: 1
    }

    constructor(private productService: ProductsServices) { }

    ngOnInit(): void {
        this._fetchAllProducts();
    }

    // function section

    _fetchAllProducts(page?: number) {
        this.productService._getAllProduct({ page: (page || this.config.currentPage), limit: this.config.itemsPerPage }, (response) => {
            this.productLists = response;
        })
    }

}