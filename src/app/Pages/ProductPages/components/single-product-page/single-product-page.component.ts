import { Component, OnInit } from '@angular/core';
import { InputModules } from '../../../../inputs/inputs.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single-product-page',
  standalone: true,
  imports: [InputModules, CommonModule],
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.scss'
})
export class SingleProductPageComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activeRoute, 'this.activeRoute  > > > > > > > > >')

    this.activeRoute.paramMap.subscribe({
      next: (data) => this._getSingleProductData(data),
      error: (err) => console.log(err)
    })
  }

  _getSingleProductData(data: ParamMap) {
    const ID = data.get('id');
    console.log('ID', ID)
  }

}
