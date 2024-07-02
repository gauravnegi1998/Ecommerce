import { Component, OnInit } from '@angular/core';
import { SignupAndUpdateComponent } from '../../Common/signupAndUpdate/signupAndUpdate.component';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../../../services/ApiHelper.service';
import _ from 'lodash';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [SignupAndUpdateComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.scss'
})
export class UpdateProfileComponent implements OnInit {

  updateDataGroup: UntypedFormGroup | any;

  constructor(private fb: UntypedFormBuilder, private activatedRoute: ActivatedRoute, private api: ApiService) {
    this.updateDataGroup = this.fb.group({
      firstName: new UntypedFormControl('', Validators.required),
      lastName: new UntypedFormControl('', Validators.required),
      email: new UntypedFormControl('', [Validators.required, Validators.email]),
      address: new UntypedFormControl('', Validators.required),
      address2: new UntypedFormControl(''),
      city: new UntypedFormControl('', Validators.required),
      zipCode: new UntypedFormControl('', Validators.required),
      country: new UntypedFormControl(''),
      state: new UntypedFormControl(''),
      phoneNumber: new UntypedFormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      birthday: new UntypedFormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (data) => this._getUserData(data),
      error: (err) => console.log(err)
    })
  }

  _getUserData(data: ParamMap) {
    console.log(data.get('id'));
    const id = data.get('id');
    if (id) {
      this.api.get(`/api/customers/${id}`).then((response) => {
        console.log(response, 'dddddddddddddddddddddddddddd');
        if (response?.status === 'ok') {
          _.map(_.keys(response?.data), (r) => {
            this.updateDataGroup.get(r)?.setValue(response?.data[r])
          });
        }
      }).catch((err) => {
        console.log(err, 'err - err - err - err- err - err - err');
      })
    }
  }

  _handleUpdate() {

  }

}
