import { AnyAction } from "redux";
import { StaffActions } from './actions';
const initialState : any = {

}

export const staffReducer = (state=initialState, action: AnyAction) =>{
   const {payload, type} = action;
    switch (type) {
        case StaffActions.ADD_EMPLOYER_WORKING:
            return { ...state, hasCreated : false }

        case StaffActions.ADD_EMPLOYER_SUCCESS : 
            return { ...state, hasCreated : action.payload.employerAddNew === 'success' ? true : false }
        
        case StaffActions.LIST_ALL_EMPLOYERS_SUCCESS : 
            return { ...state, staff : payload.employerListAll };

        case StaffActions.DELETE_EXISTING_EMPLOYERS_SUCCESS : 
            return { ...state, isEmpDeleted : payload.employerDelete };
            
        default:
            return {...state};
    }
}
