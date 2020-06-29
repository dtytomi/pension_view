import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './admin/list/list.component';
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate:[AuthGuard],
    children: [
      {
        path: '', // child route path
        component: ListComponent // child route component that the router renders
      },
      {
        path: 'add',
        component: AddComponent // another child route component that the router renders
      },
      {
        path: 'edit',
        component: EditComponent // another child route component that the router renders
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
