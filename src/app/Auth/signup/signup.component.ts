import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputModules } from '../../inputs/inputs.module';
import { CountryStateInputs } from '../../inputs/CountryState/countryState.component';
import { ICountryStateError } from '../../module/commonInterfaces';
import { MaterialUIModule } from '../../MaterialModel/material-ui.module';
import { ApiService } from '../../../services/ApiHelper.service';
import { SignupAndUpdateComponent } from '../../Common/signupAndUpdate/signupAndUpdate.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    InputModules, FormsModule, MaterialUIModule,
    ReactiveFormsModule, CommonModule, CountryStateInputs,
    SignupAndUpdateComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent implements OnInit {
  signupFormGroup: UntypedFormGroup;
  country: string = "";
  state: string = "";
  errors: ICountryStateError = { countryError: "", stateError: "" };
  responseMsg: { error: boolean, msg: string } = { error: false, msg: "" };

  constructor(private fb: UntypedFormBuilder, private api: ApiService) {
    this.signupFormGroup = this.fb.group({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      address: new UntypedFormControl('', Validators.required),
      address2: new UntypedFormControl(''),
      city: new UntypedFormControl('', Validators.required),
      zipCode: new UntypedFormControl('', Validators.required),
      phoneNumber: new UntypedFormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      birthday: new UntypedFormControl('', Validators.required),
      password: new UntypedFormControl('', Validators.required),
      confirmPassword: new UntypedFormControl('', Validators.required)
    }, {
      validator: this.confirmedValidator('password', 'confirmPassword')
    } as AbstractControlOptions
    )
  }

  ngOnInit(): void {
    console.log(this.signupFormGroup)
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

  _handleSignupUp(data: any, country: string, state: string): void {
    console.log('dddddddddddddddddddddddddddddddddd', this.signupFormGroup)

    const { status, value } = this.signupFormGroup;
    if (status === "VALID" && this.country && this.state) {
      this.api.post('/api/customers', { ...value, country: this.country, state: this.state }).then((res) => {
        if (res?.status === 'ok') {
          this.responseMsg = { error: false, msg: res?.message };
        } else {
          this.responseMsg = { error: true, msg: res?.message };
        }
      }).catch((err) => {
        this.responseMsg = { error: true, msg: JSON.stringify(err) };
      });

    } else {
      this.errors = {
        countryError: !this.country ? 'Please select your country' : "",
        stateError: !this.state ? 'Please select your state' : ""
      }

    }
  }

  // Api





}
