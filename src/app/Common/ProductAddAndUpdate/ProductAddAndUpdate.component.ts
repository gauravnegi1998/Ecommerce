import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { InputModules } from "../../inputs/inputs.module";

@Component({
    selector: "app-addAndUpdateProduct",
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputModules],
    templateUrl: './ProductAddAndUpdate.component.html',
    styleUrl: './ProductAddAndUpdate.component.scss'
})

export class ProductAddAndUpdateComponent {
    ProductFormGroup: UntypedFormGroup;
    constructor(private fb: FormBuilder, private rootFormGroup: FormGroupDirective) {
        this.ProductFormGroup = this.rootFormGroup.control as UntypedFormGroup;
    }



    //function section

    _handleOnSubmit(data: FormGroupDirective) {

    }

};