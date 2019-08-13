import * as ToggleActions from './policy-issuance.actions'
import * as fromRoot from "../../app.state";

export interface ToggleState{
    TogglePolicyIssuance:"Personel" | "Income" | "Nominee" | "Policy";
}


export interface AppState extends fromRoot.AppState {
    TogglePolicyIssuanceSteps: ToggleState;
  }

  export const intialToggleState: ToggleState={
      TogglePolicyIssuance:"Personel"
  }

export function ToggleReducer(state=intialToggleState, action: ToggleActions.ToggleActions){
    switch(action.type){
        case ToggleActions.toggleActionTypes.Show_Personel_Details:
            return {
                TogglePolicyIssuance:"Personel"
            };
        case ToggleActions.toggleActionTypes.Show_Income_Details:
            return {
                TogglePolicyIssuance:"Income"
            };
        case ToggleActions.toggleActionTypes.Show_Nominee_Details:
                return {
                    TogglePolicyIssuance:"Nominee"
                };
        case ToggleActions.toggleActionTypes.Show_Policy_Details:
                return {
                    TogglePolicyIssuance:"Policy"
                };
        default: return state;
    }
} 

export function NomineeAddReducer(state,action=ToggleActions.ADD_NOMINEE){

}