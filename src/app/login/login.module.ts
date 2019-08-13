import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { PrimeNgModule } from '../common/primeng.module';
import { RouterModule } from '@angular/router';

const routes=[
    {
        path:'',
        component:LoginComponent
    }
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    PrimeNgModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
})
export class LoginModule { }
