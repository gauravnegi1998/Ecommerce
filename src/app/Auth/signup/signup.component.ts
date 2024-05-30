import { Component } from '@angular/core';
import { TextFieldComponent } from '../../inputs/Textfield/Textfield.component';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputModules } from '../../inputs/inputs.module';
import { CountryStateInputs } from '../../inputs/CountryState/countryState.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputModules, FormsModule, ReactiveFormsModule, CommonModule, CountryStateInputs],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupFormGroup: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder) {
    this.signupFormGroup = this.fb.group({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      city: new UntypedFormControl('', Validators.required),
      zipCode: new UntypedFormControl('', Validators.required),
    })
  }

  formGroupData(name: string): UntypedFormControl {
    return this.signupFormGroup.get(name) as UntypedFormControl
  }

  _handleSignupUp(data: any): void {
    console.log(this.signupFormGroup, 'dddddddddddddddddddddddddddddddddd')
  }
}
