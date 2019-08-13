import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';

interface bloodGroupType{
  name:string;
}
@Component({
  selector: 'app-personel-details',
  templateUrl: './personel-details.component.html',
  styleUrls: ['./personel-details.component.scss']
})
export class PersonelDetailsComponent implements OnInit {
 bloodGroups:SelectItem[]
// :bloodGroupType[];
  
  
  constructor() {
     this.bloodGroups=[
    {label:"A+",value:{name:"A+"}},
    {label:"B+",value:{name:"B+"}},
    {label:"AB+",value:{name:"AB+"}},
    {label:"O+",value:{name:"O+"}},
    {label:"A-",value:{name:"A-"}},
    {label:"B-",value:{name:"B-"}},
    {label:"AB-",value:{name:"AB-"}},
    {label:"O-",value:{name:"O-"}},
    
  ] }

  ngOnInit() {
   
  }

}
