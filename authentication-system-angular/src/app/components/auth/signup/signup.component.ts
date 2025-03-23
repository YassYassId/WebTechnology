import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { first } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Import both necessary modules
  templateUrl: './signup.component.html',
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ passwordMismatch: true });
    }
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.signupForm.invalid) return;

    this.loading = true;
    const userData = {
      fullName: this.f['fullName'].value,
      email: this.f['email'].value,
      password: this.f['password'].value,
    };

    this.authService
      .register(userData)
      .pipe(first())
      .subscribe({
        next: () => this.router.navigate(['/dashboard']),
        error: (error) => {
          this.error = error.message || 'Registration failed';
          this.loading = false;
        },
      });
  }
}
