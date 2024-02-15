import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private authService: AuthService,private router:Router) {}

  onLogin(): void {

    this.authService.email = 'hsinedorai@gmail.com';
    this.authService.password = 'hsinedorai';

    const isAuthenticated = this.authService.login();
    if (isAuthenticated) {
       this.router.navigate(['/users']);
    } else {
      console.log('error');
    }
  }
}
