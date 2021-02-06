import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRouteModule } from './views/layout/admin/admin-routes.module';
import { LoginComponent } from './views/login/login.component';
import { AdminComponent } from './views/layout/admin/admin.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {
    path: '',
    component: AdminComponent,
    children: [
      {path: '', loadChildren: './views/layout/admin/admin.module#AdminModule'}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRouteModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
