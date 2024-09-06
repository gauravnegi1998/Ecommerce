import { inject, Injectable } from "@angular/core";
import { IAddToCart, ICartData } from "../app/module/commonInterfaces";
import { _asynchronousFunction } from "../app/Common/Methods";
import { ApiService } from "./ApiHelper.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})

export class MiniCartService extends _asynchronousFunction {

    private api = inject(ApiService);
    static url: string = '/cart'
    private cartId: string = "";

    cartDetails: BehaviorSubject<ICartData[] | []> = new BehaviorSubject<ICartData[] | []>([]);

    constructor() {
        super()
    }

    _getMiniCartDetail() {
        this._callTheAPi(this.api.get(MiniCartService.url), (success, error) => {
            if (error) {
                // write a custom message
            } else {
                if (success?.status === "ok") {
                    this.cartId = success?.data?._id;
                    this.cartDetails.next(success?.data?.cart_products);
                }
            }
        });
    }

    _addToCartApi(data: IAddToCart[], callback?: (data: any) => void) {
        this._callTheAPi(this.api.post(MiniCartService.url, data), (success, error) => {
            if (error) {
                // write a custom message
            } else {
                if (callback) callback(success)
            }
        });
    }

    _removeSingleCart() {

    }

}

