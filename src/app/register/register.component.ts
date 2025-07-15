import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  isShowPass = false;

  handleShowPass() {
    this.isShowPass = !this.isShowPass;
  }

  public registerForm!: FormGroup;
  public formSubmitted = false;

  constructor(private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    })
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      console.log('register-form-value', this.registerForm.value);
      this.toastrService.success(`User registered successfully`);
      this.router.navigate(['login']);

      // Reset the form
      this.registerForm.reset();
      this.formSubmitted = false; // Reset formSubmitted to false
    }
  }

  login() {
    this.router.navigate(['login']);
  }

  get name() { return this.registerForm.get('name') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }

}
