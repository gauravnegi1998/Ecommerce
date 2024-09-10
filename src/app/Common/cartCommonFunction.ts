import { MiniCartService } from "../../services/mincart.service";
import { IAddToCart } from "../module/commonInterfaces";
import { inject } from "@angular/core";

export class _cartAddFunctions {
    minCartApi = inject(MiniCartService);

    constructor() { }



    _openMiniCart(status: boolean) {
        this.minCartApi.openMiniCart$.next(status)
    }

    _handleAddToCart(products: IAddToCart[]) {
        if (products.length > 0) {
            this.minCartApi._addToCartApi(products, () => {
                this.minCartApi.openMiniCart$.next(true)
            });

        };
    }
}
