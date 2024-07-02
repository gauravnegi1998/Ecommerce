import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControlOptions, FormGroupDirective, FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputModules } from '../../inputs/inputs.module';
import { CountryStateInputs } from '../../inputs/CountryState/countryState.component';
import { ICountryStateError } from '../../module/commonInterfaces';
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

export class SignupAndUpdateComponent implements OnInit, OnChanges {

    @Input() section: string = "signup";
    @Output() _onHandleSubmit = new EventEmitter<any>();

    signupFormGroup: UntypedFormGroup | any;
    country: string = "";
    state: string = "";
    errors: ICountryStateError = { countryError: "", stateError: "" };
    responseMsg: { error: boolean, msg: string } = { error: false, msg: "" };

    constructor(private api: ApiService, private rootFormGroup: FormGroupDirective) { }

    ngOnInit(): void {
        console.log(this.rootFormGroup.control, 'this.rootFormGroupthis.rootFormGroupthis.rootFormGroup')
        this.signupFormGroup = this.rootFormGroup.control as UntypedFormGroup;
        console.log(this.rootFormGroup.control, this.formGroupData('country')?.value, this.formGroupData('country')?.value, "uu")
        this.rootFormGroup.control.valueChanges.subscribe({
            next: (data) => {
                if (data?.country || data?.state) {
                    this.country = data?.country;
                    this.state = data?.state;
                }
            },
            error: (err) => console.log(err)
        })

    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes, 'ssssssssssssssssssss')
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
