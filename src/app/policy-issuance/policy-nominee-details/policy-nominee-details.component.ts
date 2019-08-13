import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-policy-nominee-details',
  templateUrl: './policy-nominee-details.component.html',
  styleUrls: ['./policy-nominee-details.component.scss']
})
export class PolicyNomineeDetailsComponent implements OnInit {
  Relationship:SelectItem[];
  // nomineeForm: FormGroup;

  constructor(
    private fb:FormBuilder,
  ) { }

  nomineeForm=this.fb.group({
    formArray:this.fb.array([this.formPerPerson()])
  })
  ngOnInit() {
   
    this.Relationship=[
      {label:'Select',value:null},
      {label:'Wife',value:{name:'Wife'}},
      {label:'Son',value:{name:'Son'}},
      {label:'Daughter',value:{name:'Daughter'}},
      {label:'Mother',value:{name:'Mother'}},
      {label:'Father',value:{name:'Father'}},
      {label:'Brother',value:{name:'Brother'}},
      {label:'Sister',value:{name:'Sister'}},
    ]
  }

  get formArray(){
   return this.nomineeForm.get('formArray') as FormArray;
  }

  submit(form: FormGroup){
    console.log(form.value)
  }

  formPerPerson(){
    return this.fb.group({
      name:new FormControl(""),
      dob:new FormControl(""),
      relation:new FormControl(""),
      contactNo:new FormControl(null),
      stake:new FormControl(null)
    }) 
  }

  addForm(){
   return this.formArray.push(this.formPerPerson())
  }
}
