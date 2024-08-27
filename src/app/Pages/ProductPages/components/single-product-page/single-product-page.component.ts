import { Component, inject, OnInit } from '@angular/core';
import { InputModules } from '../../../../inputs/inputs.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsServices } from '../../../../../services/ProductsServices.service';
import { IProductDataQty } from '../../../../module/commonInterfaces';
import _ from 'lodash';
import { PipesModules } from '../../../../pipes/pipes.module';
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from 'lucide-angular';
import { Icons } from '../../../../Common/Icons';
import { AuthServices } from '../../../../../services/AuthServices.service';
import { debounceTime, Subject } from 'rxjs';

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
  ratingAdded: number[] = [];
  FeelAboutRating: string = ""
  ratingText: string = "";
  ErrorMsg: string = "";

  private callProductApi = new Subject();

  constructor(private activeRoute: ActivatedRoute, private productService: ProductsServices) { }

  isUserLogin = inject(AuthServices)._isUserLogin();


  ngOnInit(): void {
    console.log(this.activeRoute, 'this.activeRoute  > > > > > > > > >')
    this._getSingleProductData();
    this.callProductApi.pipe(debounceTime(500)).subscribe((r) => {
      this._getSingleProductData()
    })
  }

  // Api's call during page load 

  _getSingleProductData() {
    this.activeRoute.paramMap.subscribe({
      next: (data) => {
        const ID = data.get('id') || "";
        this.productService._getSingleProduct(ID, (response) => {
          this.singleProductData = { ...response.data, quantity: 1 };
        })
      },
      error: (err) => console.log(err)
    })

  }

  _getProductsReview() {
    // this.productService._getReviews(this.singleProductData?._id)
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
    let Rating = _.includes(this.ratingAdded, i) ? this.ratingAdded.splice(0, (i - 1)) : _.range(1, (i + 1))
    let Text = "";
    switch (Rating?.length) {
      case 1:
        Text = "Very Poor";
        break;
      case 2:
        Text = "Poor";
        break;
      case 3:
        Text = "Good";
        break;
      case 4:
        Text = "Very Good";
        break;
      case 5:
        Text = "Excellent";
        break;
    }
    this.FeelAboutRating = Text;
    this.ratingAdded = Rating;
  }

  //text area onchange function
  _handleTextChange(e: any) {
    this.ratingText = e?.target?.value;
  }

  // call function on add button click

  _handleReview() {

    const ReviewData = {
      productId: this.singleProductData?._id,
      ratingNumber: this.ratingAdded?.length,
      ratingMessage: this.ratingText,
    }

    if (this.ratingAdded?.length > 0) {
      this.productService._postYourReview(ReviewData, (response) => {
        if (response?.status === "ok") {
          this.callProductApi.next(response);
          this.ratingAdded = [];
          this.ratingText = "";
        }
      });
    } else {
      this.ErrorMsg = 'Please provide the rating';
      setTimeout(() => this.ErrorMsg = "", 2000);
    }


    console.log(this.ratingText, 'ddddddddddddddddddddddddddddddd')

  }

  _addToCart() {
    alert(JSON.stringify(this.singleProductData));
  }

}
