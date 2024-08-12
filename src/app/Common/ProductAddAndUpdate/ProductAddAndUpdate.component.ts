import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { InputModules } from "../../inputs/inputs.module";
import { MaterialUIModule } from "../../MaterialModel/material-ui.module";

@Component({
    selector: "app-addAndUpdateProduct",
    standalone: true,
    imports: [CommonModule, FormsModule, ReactiveFormsModule, InputModules, MaterialUIModule],
    templateUrl: './ProductAddAndUpdate.component.html',
    styleUrl: './ProductAddAndUpdate.component.scss'
})

export class ProductAddAndUpdateComponent implements OnInit {
    @Output() _handleSubmit = new EventEmitter<any>();

    ProductFormGroup: UntypedFormGroup | any;

    constructor(private rootFormGroup: FormGroupDirective) { }

    ngOnInit(): void {
        this.ProductFormGroup = this.rootFormGroup.control as UntypedFormGroup;
        console.log(this.ProductFormGroup, 'ProductFormGroup')
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

};