import { Action } from '@ngrx/store';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export enum toggleActionTypes{
    Show_Personel_Details='[UI] show Personel',
    Show_Income_Details='[UI] show Income',
    Show_Nominee_Details='[UI] show Nominee',
    Show_Policy_Details='[UI] show Policy',
}

export const  ADD_NOMINEE="ADD_NEW_NOMINEE"



export class ShowPersonel implements Action{
    readonly type=toggleActionTypes.Show_Personel_Details;

}

export class ShowIncome implements Action{
    readonly type=toggleActionTypes.Show_Income_Details;

}

export class ShowNominee implements Action{
    readonly type=toggleActionTypes.Show_Nominee_Details;

}

export class ShowPolicy implements Action{
    readonly type=toggleActionTypes.Show_Policy_Details;

}

export class AddNominee implements Action{
    readonly type=ADD_NOMINEE;

    constructor(){}
}

export type ToggleActions= ShowPersonel | ShowIncome | ShowNominee | ShowPolicy;
export type NomineeActions= AddNominee;
