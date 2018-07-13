import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaminaComponent } from './ramina.component';

const routes: Routes = [
  {
    path: '',
    component: RaminaComponent,
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', loadChildren: '.././login/login.module#LoginModule' },
      { path: 'admin', loadChildren: '.././dashboard/dashboard.module#DashboardModule' },
      
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaminaRoutingModule { }
