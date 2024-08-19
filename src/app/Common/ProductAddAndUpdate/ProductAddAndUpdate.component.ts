import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { InputModules } from "../../inputs/inputs.module";
import { MaterialUIModule } from "../../MaterialModel/material-ui.module";
import { IMultiSelectOption, NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { ProductsServices } from "../../../services/ProductsServices.service";

@Component({
    selector: "app-addAndUpdateProduct",
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputModules, MaterialUIModule, NgxBootstrapMultiselectModule],
    templateUrl: './ProductAddAndUpdate.component.html',
    styleUrl: './ProductAddAndUpdate.component.scss'
})

export class ProductAddAndUpdateComponent implements OnInit {
    @Output() _handleSubmit = new EventEmitter<any>();

    ProductFormGroup: UntypedFormGroup | any;
    myOptions: IMultiSelectOption[] = [
        { id: "1", name: 'Car brands' },
    ]

    constructor(private rootFormGroup: FormGroupDirective, private ProductService: ProductsServices) { }

    ngOnInit(): void {
        this.ProductFormGroup = this.rootFormGroup.control as UntypedFormGroup;
        console.log(this.ProductFormGroup, 'ProductFormGroup')
        this._getCategoryApi()
    }


    formGroupData(name: string): UntypedFormControl {
        return this.ProductFormGroup?.get(name) as UntypedFormControl
    }


    formPriceGroupData(name: string): UntypedFormControl {
        return this.ProductFormGroup.controls?.price?.get(name) as UntypedFormControl
    }

    //function section

    _handleOnSubmit(data: FormGroupDirective) {
        console.log(data, 'data > > > > > > >')
        if (this.ProductFormGroup.status === "INVALID") {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            this._handleSubmit.emit(data);
        }
    }



    get categories() {
        return this.ProductService.categories?.length > 0 ? this.ProductService.categories : [];
    }

    _getCategoryApi() {
        this.ProductService._getCategories({ limit: 100 }, () => {
            console.log(this.categories, 'this.categories');
        });
    }

};