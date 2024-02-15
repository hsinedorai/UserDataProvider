import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor( private router:Router) {}

  email!: string;
  password!: string;
  login(): boolean {
    if (
      this.email === 'hsinedorai@gmail.com' &&
      this.password === 'hsinedorai'
    ) {
      return true;
    } else {
      this.router.navigate(['login'])

      return false;
    }
  }
}
