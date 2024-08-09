import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { InputModules } from "../../inputs/inputs.module";

@Component({
    selector: "app-addAndUpdateProduct",
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputModules],
    templateUrl: './ProductAddAndUpdate.component.html',
    styleUrl: './ProductAddAndUpdate.component.scss'
})

export class ProductAddAndUpdateComponent implements OnInit {
    @Output() _handleSubmit = new EventEmitter<any>();
    ProductFormGroup: UntypedFormGroup | any;
    constructor(private rootFormGroup: FormGroupDirective) { }

    ngOnInit(): void {
        this.ProductFormGroup = this.rootFormGroup.control as UntypedFormGroup;
    }



    //function section

    _handleOnSubmit(data: FormGroupDirective) {
        this._handleSubmit.emit(data)
    }

};