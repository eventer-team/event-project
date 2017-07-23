import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'auth', 
    component: AuthComponent,
    children: [
      {path: 'login', pathMatch:"full", component: LoginComponent},
      {path: 'register', pathMatch:"full", component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [
  AuthComponent,
  LoginComponent,
  RegisterComponent
];
