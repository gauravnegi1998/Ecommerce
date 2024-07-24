import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { AbstractControlOptions, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
import { InputModules } from "../../inputs/inputs.module";
import { LUCIDE_ICONS, LucideAngularModule, LucideIconProvider } from "lucide-angular";
import { Icons } from "../../Common/Icons";
import _ from "lodash";

@Component({
    selector: 'app-product-category',
    templateUrl: './categories.component.html',
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, CommonModule, InputModules, LucideAngularModule],
    styleUrl: './categories.component.scss',
    providers: [
        {
            provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons)
        }
    ]
})

export class CategoriesComponent {

    categoryFormGroup!: UntypedFormGroup;

    constructor(private fb: UntypedFormBuilder) {
        this.categoryFormGroup = this.fb.group({
            categoryId: new UntypedFormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
            categoryName: new UntypedFormControl('', [Validators.required])
        }, {
            validator: this._customValidation('categoryId') as AbstractControlOptions
        })
    }

    _customValidation(fieldName: string) {
        return (formGroup: UntypedFormGroup) => {
            const FIELD_VALUE = formGroup.controls[fieldName];
            console.log(FIELD_VALUE, 'FIELD_VALUE')
            if (FIELD_VALUE.errors && !FIELD_VALUE.errors?.['onlyNumber']) {
                return;
            }
            if (!_.isNaN(FIELD_VALUE?.value)) {
                FIELD_VALUE.setErrors({ 'onlyNumber': true });
            } else {
                FIELD_VALUE.setErrors({ 'onlyNumber': false });
            }

        }
    }

    _fieldValues(name: string): UntypedFormControl {
        return this.categoryFormGroup?.get(name) as UntypedFormControl
    }

    _handleSubmit(data: any) {
        const { status, value } = this.categoryFormGroup;

        if (status === "VALID") {
            alert(JSON.stringify(value));
        }
    }

}