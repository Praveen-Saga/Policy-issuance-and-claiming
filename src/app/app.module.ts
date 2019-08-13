import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreModule } from "@ngrx/store";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleReducer } from './policy-issuance/store/policy-issuance.reducer';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      // toggle:ToggleReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
