import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { InputModules } from '../../inputs/inputs.module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LUCIDE_ICONS, LucideAngularComponent, LucideAngularModule, LucideIconProvider } from 'lucide-angular';
import { Icons } from '../../Common/Icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputModules, ReactiveFormsModule, FormsModule, RouterModule, CommonModule, LucideAngularModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [
    { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(Icons) },
  ]
})

export class LoginComponent implements OnInit {
  loginFormGroup: UntypedFormGroup;
  emailValue: string = "";
  passwordType: string = "password";

  constructor(private router: Router, private route: ActivatedRoute, private fb: UntypedFormBuilder) {
    this.loginFormGroup = this.fb.group({
      email: new UntypedFormControl([], [Validators.required, Validators.email]),
      password: new UntypedFormControl([], [Validators.required, Validators.minLength(6)])
    })
  }

  ngOnInit(): void {
    console.log(this.emailValue, ">>>>>>>>>")
  }

  _handleTypeChange(data: string) {
    console.log(data, "dddddddddddddddddddddddddddddddddddddddddd")
    this.passwordType = data;
  }

  _handleLoginSubmit(data: any): void {
    console.log('dafdfsadfsdfsdfsdf',)
  }

  _handleSignupClick(event: any) {
    console.log(this.route, "dddddddddddddddddddddddddddddddddddddddddd")
    this.router.navigate(['signup']);
  }

  get Email(): UntypedFormControl {
    return this.loginFormGroup.get('email') as UntypedFormControl;
  }

  get Password(): UntypedFormControl {
    return this.loginFormGroup.get('password') as UntypedFormControl;
  }

}
