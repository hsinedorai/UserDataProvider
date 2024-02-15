import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { UserDataComponent } from './user-data/user-data.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'users', component:UserDataComponent ,canActivate:[authGuard] },
  { path: 'login', component: LoginComponent },

  { path: '', pathMatch: 'full', redirectTo: 'login' }



];
