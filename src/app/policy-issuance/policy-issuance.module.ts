import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  

import { StoreModule } from "@ngrx/store";
import { ToggleReducer } from "./store/policy-issuance.reducer"
import { PrimeNgModule } from '../common/primeng.module';
import { PolicyIssuanceComponent } from './policy-issuance.component';
import { PersonelDetailsComponent } from './personel-details/personel-details.component';
import { IncomeDetailsComponent } from './income-details/income-details.component';
import { PolicyNomineeDetailsComponent } from './policy-nominee-details/policy-nominee-details.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes=[
    {
        path:'',
        component:PolicyIssuanceComponent
    },
]

@NgModule({
  declarations: [
      PolicyIssuanceComponent,
      PersonelDetailsComponent,
      IncomeDetailsComponent,
      PolicyNomineeDetailsComponent,
      PolicyDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
    PrimeNgModule,
    RouterModule.forChild(routes),

    StoreModule.forFeature("toggle", ToggleReducer),
  ],
  providers: [],
})
export class PolicyIssuanceModule { }
