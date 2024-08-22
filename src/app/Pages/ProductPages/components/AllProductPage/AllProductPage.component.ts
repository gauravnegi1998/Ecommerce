import { Component, OnInit } from "@angular/core";
import { ProductsServices } from "../../../../../services/ProductsServices.service";
import { NgxPaginationModule, PaginationInstance } from "ngx-pagination";
import { CommonModule } from "@angular/common";
import { InputModules } from "../../../../inputs/inputs.module";
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from "lucide-angular";
import { Icons } from "../../../../Common/Icons";
import { IProductData } from "../../../../module/commonInterfaces";
import { PipesModules } from "../../../../pipes/pipes.module";

@Component({
    selector: "app-allProductPage",
    standalone: true,
    imports: [CommonModule, InputModules, NgxPaginationModule, LucideAngularModule, PipesModules],
    templateUrl: './AllProductPage.component.html',
    styleUrl: './AllProductPage.component.scss',
    providers: [
        { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
    ]
})

export class AllProductPageComponent implements OnInit {

    productLists: IProductData[] = [];
    config: PaginationInstance = {
        id: "allProduct_page",
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 9
    }

    constructor(private productService: ProductsServices) { }

    ngOnInit(): void {
        this._fetchAllProducts();
    }

    // function section

    _fetchAllProducts(page?: number) {
        this.productService._getAllProduct({ page: (page || this.config.currentPage), limit: this.config.itemsPerPage }, (response) => {
            this.productLists = response?.data?.product_data;
            this.config = { ...this.config, totalItems: response?.data?.totalCount, currentPage: +response?.data?.page }
            window.scrollTo({ top: 0, behavior: "smooth" });
        })
    }

    _handlePageChange(data: any) {
        console.log('totalCount', data, 'uuuuuuuuuuuuuuuu')
        // this.config = { ...this.config, currentPage: data };
        this._fetchAllProducts(data)
    }


    _handleAddToCart(product: IProductData) {
        console.log(product, 'product');
    }

}