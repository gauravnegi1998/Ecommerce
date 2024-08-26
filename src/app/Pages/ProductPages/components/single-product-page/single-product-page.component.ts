import { Component, OnInit } from '@angular/core';
import { InputModules } from '../../../../inputs/inputs.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsServices } from '../../../../../services/ProductsServices.service';
import { IProductDataQty } from '../../../../module/commonInterfaces';
import _ from 'lodash';
import { PipesModules } from '../../../../pipes/pipes.module';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';
import { Icons } from '../../../../Common/Icons';

@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [InputModules, CommonModule, PipesModules, LucideAngularModule],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss',
  providers: [
    { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) }
  ]
})
export class SingleProductPageComponent implements OnInit {

  singleProductData: IProductDataQty | any = {};
  activeRating: boolean = false;
  ratingAdded: number[] = [];

  constructor(private activeRoute: ActivatedRoute, private productService: ProductsServices) { }

  ngOnInit(): void {
    console.log(this.activeRoute, 'this.activeRoute  > > > > > > > > >')

    this.activeRoute.paramMap.subscribe({
      next: (data) => this._getSingleProductData(data),
      error: (err) => console.log(err)
    })
  }

  _getSingleProductData(data: ParamMap) {
    const ID = data.get('id') || "";
    console.log('ID', ID)
    this.productService._getSingleProduct(ID, (response) => {
      this.singleProductData = { ...response.data, quantity: 1 };
    })
  }

  _arrayConverter(data: number | undefined) {
    if (data) {
      const COUNTING_ARRAY = _.range(1, data + 1);
      return COUNTING_ARRAY;
    }
    return [];
  }

  _handleQty(action: string) {
    let QTY = this.singleProductData['quantity'];
    if (action === 'sub') {
      QTY = (QTY - 1 > 0) ? (QTY - 1) : 1;
    } else {
      QTY = ((QTY + 1) < this.singleProductData.minimumOrderQuantity) ? (QTY + 1) : this.singleProductData.minimumOrderQuantity;
    }
    this.singleProductData['quantity'] = QTY;
  }

  _ratingCheck(i: number) {
    return !!this.ratingAdded.includes(i)
  }

  _addToCart() {
    alert(JSON.stringify(this.singleProductData));
  }

}
