import { Component, OnInit } from '@angular/core';
import { InputModules } from '../../../../inputs/inputs.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsServices } from '../../../../../services/ProductsServices.service';
import { IProductDataQty } from '../../../../module/commonInterfaces';
import _ from 'lodash';

@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [InputModules, CommonModule],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss'
})
export class SingleProductPageComponent implements OnInit {

  singleProductData!: IProductDataQty;
  activeClass: string = "";

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
      this.singleProductData = response.data;
    })
  }

  _arrayConverter(data: number | undefined) {
    if (data) {
      const COUNTING_ARRAY = _.range(1, data + 1);
      return COUNTING_ARRAY;
    }
    return [];
  }

  _handleQty(event: any) {
    this.singleProductData['quantity'] = event?.target.value;

    this.activeClass = '';
  }

}
