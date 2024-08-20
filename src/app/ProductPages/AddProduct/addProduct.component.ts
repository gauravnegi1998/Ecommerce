import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AbstractControl, AbstractControlOptions, FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { InputModules } from "../../inputs/inputs.module";
import { ProductAddAndUpdateComponent } from "../../Common/ProductAddAndUpdate/ProductAddAndUpdate.component";
import _ from "lodash";

@Component({
    selector: "app-addProduct",
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputModules, ProductAddAndUpdateComponent],
    templateUrl: './addProduct.component.html',
    styleUrl: './addProduct.component.scss'
})

export class AddProductComponent {
    ProductFormGroup: UntypedFormGroup;
    constructor(private fb: FormBuilder) {
        this.ProductFormGroup = this.fb.group({
            name: new UntypedFormControl('', Validators.required),
            itemId: new UntypedFormControl('', [Validators.required, Validators.maxLength(6)]),
            itemCode: new UntypedFormControl('', Validators.required),
            // normalImage: "https://images-na.ssl-images-amazon.com/images/I/31N0qoF1RPL.jpg",
            displayOnlyAdmin: new UntypedFormControl(false),
            hideFromWeb: new UntypedFormControl(false),
            // webCategories: new UntypedFormControl('', Validators.required),
            webCategories: new UntypedFormControl([], Validators.required),
            description: new UntypedFormControl('', Validators.required),
            price: new UntypedFormGroup({
                normalPrice: new UntypedFormControl('', Validators.required),
                offerPrice: new UntypedFormControl('', Validators.required)
            }),
            isEligibleForAutoOrder: new UntypedFormControl(true),
            availableStock: new UntypedFormControl('', Validators.required),
            returnPolicy: new UntypedFormControl('7 days replacement o return policy', Validators.required)
        },
            { validator: this.customValidation() } as AbstractControlOptions)
    }


    _handleErrorFunction(VALUE: AbstractControl, key: string) {
        if (VALUE?.errors && !VALUE?.errors?.['onlyNumber']) {
            return;
        }
        if (_.isNaN(+VALUE?.value)) {
            VALUE.setErrors({ 'onlyNumber': true });
        } else {
            VALUE.setErrors((VALUE?.value?.length > 6) ? { 'onlyNumber': true } : null);
        }
    }

    customValidation() {
        return (formGroup: UntypedFormGroup) => {

            _.forEach(['itemId', 'availableStock'], (r) => {
                const VALUE = formGroup.controls[r];
                this._handleErrorFunction(VALUE, r)
            })

            _.forEach(['normalPrice', 'offerPrice'], (r) => {
                const DATA = formGroup.controls["price"] as UntypedFormGroup;

                console.log(DATA?.controls?.[r], 'talk with data');
                this._handleErrorFunction(DATA?.controls?.[r], r)
            })
        }
    }

    //function section

    _handleOnSubmit(data: FormGroupDirective) {

    }

};