import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputModules } from '../../inputs/inputs.module';
import { CountryStateInputs } from '../../inputs/CountryState/countryState.component';
import { ICountryStateError } from '../../module/commonInterfaces';
import { MaterialUIModule } from '../../MaterialModel/material-ui.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../services/ApiHelper.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    InputModules, FormsModule, MaterialUIModule,
    ReactiveFormsModule, CommonModule, CountryStateInputs,
    NgbDatepickerModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})

export class SignupComponent implements OnInit {
  signupFormGroup: UntypedFormGroup;
  country: string = "";
  state: string = "";
  errors: ICountryStateError = { countryError: "", stateError: "" }

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
    }
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

  formGroupData(name: string): UntypedFormControl {
    return this.signupFormGroup.get(name) as UntypedFormControl
  }

  _handleSignupUp(data: any): void {
    console.log('dddddddddddddddddddddddddddddddddd', this.signupFormGroup)

    const { status, value } = this.signupFormGroup;
    if (status === "VALID" && this.country && this.state) {
      console.log(status, value, 'dddddddddddddddddddddddddddddddddd', this.signupFormGroup)
      this.api.post('/api/customers', value).then((res) => {
        console.log(res, 'success');
      }).catch((err) => {
        console.error(err, 'Error');
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
