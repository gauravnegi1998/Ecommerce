import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { InputModules } from "../../inputs/inputs.module";
import { ProductAddAndUpdateComponent } from "../../Common/ProductAddAndUpdate/ProductAddAndUpdate.component";

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
            hideFromAdmin: new UntypedFormControl(false, Validators.required),
            hideFromWeb: new UntypedFormControl(false, Validators.required),
            webCategories: new UntypedFormArray([], Validators.required),
            description: new UntypedFormControl('', Validators.required),
            price: {
                normalPrice: new UntypedFormControl('', Validators.required),
                offerPrice: new UntypedFormControl('', Validators.required)
            },
            isEligibleForAutoOrder: new UntypedFormControl(true),
            availableStock: new UntypedFormControl('', Validators.required),
            returnPolicy: new UntypedFormControl('7days', Validators.required)
        })
    }



    //function section

    _handleOnSubmit(data: FormGroupDirective) {

    }

};