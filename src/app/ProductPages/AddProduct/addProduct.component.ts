import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AbstractControlOptions, FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
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
            returnPolicy: new UntypedFormControl('7days', Validators.required)
        },
            { validator: this.customValidation() } as AbstractControlOptions)
    }


    customValidation() {
        return (formGroup: UntypedFormGroup) => {
            const itemId = formGroup.controls['itemId'];
            if (itemId.errors && !itemId.errors?.['onlyNumber']) {
                return;
            }
            if (_.isNaN(+itemId?.value)) {
                itemId.setErrors({ 'onlyNumber': true });
            } else {

                itemId.setErrors((itemId?.value?.length > 6) ? { 'onlyNumber': true } : null);
            }
        }
    }

    //function section

    _handleOnSubmit(data: FormGroupDirective) {

    }

};