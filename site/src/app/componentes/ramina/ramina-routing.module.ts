import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaminaComponent } from './ramina.component';
import { DashboardComponent } from '.././dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: RaminaComponent,
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', loadChildren: '.././login/login.module#LoginModule' },
      {
        path: 'admin',
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: 'index', pathMatch: 'full' },
          { path: 'index', loadChildren: '.././index/index.module#IndexModule' },
          { path: 'post', loadChildren: '.././post/post.module#PostModule' },
          { path: 'categorias', loadChildren: '.././post/post.module#PostModule' },
          { path: 'media', loadChildren: '.././post/post.module#PostModule' }
        ]
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaminaRoutingModule { }
