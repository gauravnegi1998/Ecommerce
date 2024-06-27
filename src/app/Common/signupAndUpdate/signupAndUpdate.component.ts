import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControlOptions, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputModules } from '../../inputs/inputs.module';
import { CountryStateInputs } from '../../inputs/CountryState/countryState.component';
import { ICountryStateError } from '../../module/commonInterfaces';
import { MaterialUIModule } from '../../MaterialModel/material-ui.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services/ApiHelper.service';

@Component({
    selector: 'app-signupAndUpdate',
    standalone: true,
    imports: [
        InputModules, ReactiveFormsModule, FormsModule, CommonModule, CountryStateInputs
    ],
    templateUrl: './signupAndUpdate.component.html',
    styleUrl: './signupAndUpdate.component.scss'
})

export class SignupAndUpdateComponent implements OnInit {

    @Input() section: string = "signup";
    @Input() formGroupFields: UntypedFormGroup | any;
    @Output() _onHandleSubmit = new EventEmitter<any>();

    signupFormGroup: UntypedFormGroup | any;
    country: string = "";
    state: string = "";
    errors: ICountryStateError = { countryError: "", stateError: "" };
    responseMsg: { error: boolean, msg: string } = { error: false, msg: "" };

    constructor(private api: ApiService) { }

    ngOnInit(): void {
        console.log(this.formGroupFields)
        this.signupFormGroup = this.formGroupFields;
    }


    confirmedValidator(controlName: string, matchedControlName: string) {

        return (formGroup: UntypedFormGroup) => {
            const PASSWORD = formGroup.controls[controlName];
            const CONFIRM_PASSWORD = formGroup.controls[matchedControlName];

            if (PASSWORD.errors && !CONFIRM_PASSWORD?.errors?.['confirmValidation']) {
                return;
            }

            if (PASSWORD.value !== CONFIRM_PASSWORD.value) {
                CONFIRM_PASSWORD.setErrors({ confirmValidation: true })
            } else {
                CONFIRM_PASSWORD.setErrors(null)
            }

        }

    }

    formGroupData(name: string): UntypedFormControl {
        return this.signupFormGroup?.get(name) as UntypedFormControl
    }

    _handleSignupUp(data: UntypedFormGroup): void {
        const { status, value } = data;
        if (data?.status === "VALID" && this.country && this.state) {
            this._onHandleSubmit.emit({ data, country: this.country, state: this.state })

        } else {
            this.errors = {
                countryError: !this.country ? 'Please select your country' : "",
                stateError: !this.state ? 'Please select your state' : ""
            }

        }
    }

}
