import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:"login",
    loadChildren:'./login/login.module#LoginModule'
  },
  {
    path:"policy-issuance",
    loadChildren:'./policy-issuance/policy-issuance.module#PolicyIssuanceModule'
  },
  {
    path:"**",
    redirectTo:'/login',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
