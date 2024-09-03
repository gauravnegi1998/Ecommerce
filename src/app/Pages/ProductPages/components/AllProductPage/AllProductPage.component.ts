import { Component, OnInit } from "@angular/core";
import { ProductsServices } from "../../../../../services/ProductsServices.service";
import { NgxPaginationModule, PaginationInstance } from "ngx-pagination";
import { CommonModule, Location } from "@angular/common";
import { InputModules } from "../../../../inputs/inputs.module";
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from "lucide-angular";
import { Icons } from "../../../../Common/Icons";
import { IProductDataQty } from "../../../../module/commonInterfaces";
import { PipesModules } from "../../../../pipes/pipes.module";
import _ from "lodash";
import { OutSideClickDirective } from "../../../../directives/outside-click.directive";
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
    selector: "app-allProductPage",
    standalone: true,
    imports: [RouterLink, OutSideClickDirective, CommonModule, InputModules, NgxPaginationModule, LucideAngularModule, PipesModules],
    templateUrl: './AllProductPage.component.html',
    styleUrl: './AllProductPage.component.scss',
    providers: [
        { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
    ]
})

export class AllProductPageComponent implements OnInit {


    productLists: IProductDataQty[] = [];
    categoryID: boolean = false
    quantity: number = 1;
    config: PaginationInstance = {
        id: "allProduct_page",
        currentPage: 1,
        totalItems: 10,
        itemsPerPage: 9
    }

    activeClass: string | undefined = "";

    constructor(private productService: ProductsServices, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe((r) => {
            this.categoryID = !!r?.['catId'];
            this._fetchAllProducts(r?.['catId']);
        })
    }

    log(data: any) {
        console.log(' > > > >  > > > > > > > >', data);
    }
    // function section

    _fetchAllProducts(catId: string = "", page?: number) {
        this.productService._getAllProduct({ catId, page: (page || this.config.currentPage), limit: this.config.itemsPerPage }, (response) => {
            this.productLists = _.map(response?.data?.product_data, (r) => ({ ...r, quantity: 1 }));
            this.config = { ...this.config, totalItems: response?.data?.totalCount, currentPage: +response?.data?.page }
            window.scrollTo({ top: 0, behavior: "smooth" });
        })
    }

    //on Pagination Change
    _handlePageChange(data: any) {
        this._fetchAllProducts(data)
    }

    // on Quantity change
    _handleQty(value: number, id: (string | undefined)) {
        const FIND_PRODUCT_INDEX = _.findIndex(this.productLists, (r) => r?._id === id);
        this.productLists[FIND_PRODUCT_INDEX]['quantity'] = value;
        this.activeClass = '';
    }

    closeDropDown() {
        // this.activeClass = '';
        console.log('clicked outside');
    }

    _handleAddToCart(product: IProductDataQty) {
        console.log(product, 'product');
    }

    _arrayConverter(data: number | undefined) {
        if (data) {
            const COUNTING_ARRAY = _.range(1, data + 1);
            return COUNTING_ARRAY;
        }
        return [];
    }

    _handleBack() {
        this.location.back()
    }

}