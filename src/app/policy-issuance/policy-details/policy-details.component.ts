import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';


@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {
  premiumFrequency:SelectItem[]

  constructor() { }

  ngOnInit() {
    this.premiumFrequency=[
      {label:'Monthly',value:{name:'Monthly'}},
      {label:'Quaterly',value:{name:'Quaterly'}},
      {label:'Half-Yearly',value:{name:'Half-Yearly'}},
      {label:'Yearly',value:{name:'Yearly'}},
    ]
  }

}
