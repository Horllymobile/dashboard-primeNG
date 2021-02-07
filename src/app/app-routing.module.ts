import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './layout/admin/admin.module';

import { AdminComponent } from './layout/admin/admin.component';
import { LoginComponent } from './login/login.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: AdminComponent,
    children: [
      {path: '', loadChildren:'./layout/admin/admin.module#AdminModule'}
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    // AdminModule,
    RouterModule.forRoot(
      routes,
    )
  ],
  exports: []
})
export class AppRoutingModule { }
