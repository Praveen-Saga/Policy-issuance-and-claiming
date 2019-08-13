import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import {MenuItem} from 'primeng/api';
import * as ToggleActions from './store/policy-issuance.actions'
import { ToggleState } from './store/policy-issuance.reducer';


@Component({
  selector: 'app-policy-issuance',
  templateUrl: './policy-issuance.component.html',
  styleUrls: ['./policy-issuance.component.scss']
})
export class PolicyIssuanceComponent implements OnInit {
  toggleState:Observable<ToggleState>;
  toggleSwitch
  items: MenuItem[];
  constructor(
    private store:Store<{Toggle:{TogglePolicyIssuance:string}}>
    ) { 
    }

  ngOnInit() {
    this.items=[
      {label:'Personel Details',command:()=>{ this.store.dispatch(new ToggleActions.ShowPersonel) }},
      {label:'Income Details',command:()=>{ this.store.dispatch(new ToggleActions.ShowIncome) }},
      {label:'Nominee Details',command:()=>{ this.store.dispatch(new ToggleActions.ShowNominee) }},
      {label:'Policy Details',command:()=>{ this.store.dispatch(new ToggleActions.ShowPolicy) }},
    ]

   this.toggleState=this.store.select("toggle");
  //  console.log(this.toggleState,this.store)
  //  this.store.dispatch(new ToggleActions.ShowNominee)
  //  this.store.select('toggle').subscribe(state=>console.log(this.toggleSwitch=state))
  }

  toggleNav(state,action){
    console.log(state,action);
    let currentState=this.items.indexOf(this.items.find(el=>{
      return el.label.includes(state)
    }))
    console.log(currentState)
    if(action=="prev"){
      if(currentState>0){
        this.items[currentState-1].command();
      }
    }
    if(action=="next"){
      if(currentState<this.items.length-1){
        this.items[currentState+1].command();
      }
    }
   
  }  

  submit(){
    console.log('submitted..')
  }

}
