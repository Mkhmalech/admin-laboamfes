import { all, fork, takeEvery } from 'redux-saga/effects'
import { AnyAction } from 'redux';
import { tryFetching } from '../../../store/config'
import { StaffActions } from './actions';

/**
 * labo fetch details
 */
function* StaffAddNew({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        StaffActions.ADD_EMPLOYER_ERROR,
        StaffActions.ADD_EMPLOYER_SUCCESS,
        StaffActions.ADD_EMPLOYER_WORKING
    )
}
/**
 * labo fetch details
 */
function* StaffFetchAll({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        StaffActions.LIST_ALL_EMPLOYERS_ERROR,
        StaffActions.LIST_ALL_EMPLOYERS_SUCCESS
    )
}
/**
 * labo staff delete employer
 */
function* StaffDeleteEmployer({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        StaffActions.DELETE_EXISTING_EMPLOYERS_ERROR,
        StaffActions.DELETE_EXISTING_EMPLOYERS_SUCCESS
    )
}
/**
 * labo staff delete employer
 */
function* fetchExistingEmployer({path, payload} : AnyAction){
    yield tryFetching(
        path,
        payload,
        StaffActions.FETH_EXISTING_EMPLOYER_ERROR,
        StaffActions.FETH_EXISTING_EMPLOYER_SUCCESS
    )
}
//watcher func dispatcher
function* watchLabLaboStaff(){

    // fetch tests form server 
    yield takeEvery(StaffActions.ADD_EMPLOYER, StaffAddNew)
    yield takeEvery(StaffActions.LIST_ALL_EMPLOYERS, StaffFetchAll)
    yield takeEvery(StaffActions.DELETE_EXISTING_EMPLOYERS, StaffDeleteEmployer)
    yield takeEvery(StaffActions.FETH_EXISTING_EMPLOYER, fetchExistingEmployer)
}

export function* LabLaboStaffSaga(){
    yield all([fork(watchLabLaboStaff)])
}