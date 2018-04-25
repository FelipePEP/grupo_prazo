import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';

import { HomeComponent } from '../pages/home/home.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { LoginComponent } from '../pages/login/login.component';
import { UsersComponent } from '../pages/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
