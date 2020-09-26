import { combineReducers } from "redux";
import { RouterState, connectRouter } from "connected-react-router";
import { History } from "history";

//===> from saga middleware
import { fork, all } from 'redux-saga/effects'

//===> auth component
import AuthReducer, {AuthSaga} from '../authentification-redux-lib/index'

//===> staff component
import {LabLaboStaffSaga, staffReducer} from '../ittyni-staff/index'

//===> setting component
import {settingReducer, LabLaboSettingSaga} from '../ittyni-labsetting/src'

//===> catalogue component
import {catalogListReducer, CatalogSaga} from '../labCatalog/src'

//===> appointment component
import {appointmentReducer, AppointmentSaga} from '../lab-appointment/src'

export const createRootReducer = (history: History) =>
  combineReducers({
    auth   : AuthReducer,
    staff  : staffReducer,
    // slider : SliderReducer,
    catalog: catalogListReducer,
    setting: settingReducer,
    appointment : appointmentReducer,
    router : connectRouter(history)
  });

export function* rootSaga() {
  yield all([
    
    //  Auth
     fork(AuthSaga),
     
    //  satff
     fork(LabLaboStaffSaga),

    //  setting
     fork(LabLaboSettingSaga),

    //  Catalog
     fork(CatalogSaga),

    //  Orders

    // appointment
     fork(AppointmentSaga)

  ]);
}
