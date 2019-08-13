import { NgModule } from '@angular/core';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar'
import {InputTextareaModule} from 'primeng/inputtextarea';
import {DropdownModule} from 'primeng/dropdown';
import {SpinnerModule} from 'primeng/spinner';

const componentModules=[
    CardModule,
    InputTextModule,
    PanelMenuModule,
    ButtonModule,
    CalendarModule,
    InputTextareaModule,
    DropdownModule,
    SpinnerModule
]

@NgModule({
  declarations: [
  ],
  imports: [
      componentModules
  ],
  exports:[
      componentModules
  ],
  providers: [],
})
export class PrimeNgModule { }
