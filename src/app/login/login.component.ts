import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderThreeComponent } from '../shared/header/header-three/header-three.component';


@Component({
  standalone: true,
  imports: [RouterModule,CommonModule, FormsModule, ReactiveFormsModule, SharedModule, HeaderThreeComponent],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isShowPass = false;

  handleShowPass() {
    this.isShowPass = !this.isShowPass;
  }

  public loginForm!: FormGroup;
  public formSubmitted = false;

  constructor(
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      console.log('login-form-value', this.loginForm.value);
      this.toastrService.success(`Logged in successfully`);

      // Reset the form
      this.loginForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
      this.router.navigate(['dashboard'])
    }
  }

  register() {
    this.router.navigate(['register']);
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
}
