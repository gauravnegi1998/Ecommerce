import { CommonModule } from "@angular/common";
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from "lucide-angular";
import { Icons } from "../../Common/Icons";
import { ICartData } from "../../module/commonInterfaces";
import { _cartAddFuntions } from "../../Common/cartCommonFunction";
import { MiniCartService } from "../../../services/mincart.service";

@Component({
    selector: "app-miniCart",
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: "./minicart.component.html",
    styleUrl: './minicart.component.scss',
    providers: [
        { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
    ]
})

export class MiniCartComponent extends _cartAddFuntions implements OnInit, OnChanges {

    cartData: ICartData[] = [];
    open: boolean = true;
    constructor() {
        super();

    }


    ngOnInit(): void {
        this.minCartApi._getMiniCartDetail();

        this.minCartApi.cartDetails$.subscribe((data) => {
            this.cartData = data;
        })
        this.minCartApi.openMiniCart$.subscribe((value) => {
            // this.open = value;
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes, this.open, '>>>>>>>>>>>>>>>>>>>>>>>>>>')

    }

    // ngOnDestroy(): void {
    //     this.open$.unsubscribe()
    // }

}