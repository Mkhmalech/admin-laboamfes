import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { CatalogActions } from './actions';
import * as config from '../../../store/config';

// fetch all catalogs
function* catalogFetchAll({path, payload} : any){
    yield config.tryFetching(
        path,
        payload,
        CatalogActions.CATALOG_FETCH_ALL_ERROR,
        CatalogActions.CATALOG_FETCH_ALL_SUCCESS
    )
}
// fetch catalog details
function* catalogFetchDetails({path, payload} : any){
    yield config.tryFetching(
        path,
        payload,
        CatalogActions.CATALOG_FETCH_DETAILS_ERROR,
        CatalogActions.CATALOG_FETCH_DETAILS_SUCCESS
    )
}
//  update bfactor
function* catalogUpdateBFactor({path, payload} : any){
    yield config.tryFetching(
        path,
        payload,
        CatalogActions.CATALOG_UPDATE_BFACTOR_ERROR,
        CatalogActions.CATALOG_UPDATE_BFACTOR_SUCCESS
    )
}
//  update price
function* catalogUpdatePrice({path, payload} : any){
    yield config.tryFetching(
        path,
        payload,
        CatalogActions.CATALOG_UPDATE_PRICE_ERROR,
        CatalogActions.CATALOG_UPDATE_PRICE_SUCCESS
    )
}
//  fetch modified tests
function* catalogModifiedTests({path, payload} : any){
    yield config.tryFetching(
        path,
        payload,
        CatalogActions.CATALOG_FETCH_MODIFIED_TESTS_ERROR,
        CatalogActions.CATALOG_FETCH_MODIFIED_TESTS_SUCCESS
    )
}




function* LabCatalogListFetch({path, payload} : any){

    try{

        // yield put({type : CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_FETCHING});


        const res = yield call(config.callApi, 'post', config.api, path, payload );

        if(!res) {
            yield put({
                type: CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_ERROR, 
                error : res.errors[0].message
            })
        }

        else {

            yield put({
                type : CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_SUCCESS, 
                catalogListTest : res.data.catalog.findCatalogTests
            })
        }

    } catch(e) {
        throw new Error(e); 
    }
}

/**
 * Lab
 * Catalog
 * List
 * Filter 
 * by @test @name 
 * watcher function
 * 
 */
function* LabCatalogListFilterTestName({path, payload} : any){

    try {

        const res = yield call(config.callApi, 'post', config.api, path, payload ); 

        if(!res) {
            yield put({
                type: CatalogActions.CATALOG_LIST_FILTER_TEST_NAME_ERROR, 
                error : res.errors[0].message
            })
        }

        else {
            yield put({
                type : CatalogActions.CATALOG_LIST_FILTER_TEST_NAME_SUCCESS, 
                CatalogList : res.data.LabTestFrenchSearch
            })
        }

    } catch (e) {

        throw new Error(e);
    }
}

function* LabCatalogUpdateTests({path, payload} : any){

    try {

        const res = yield call(config.callApi, 'post', config.api, path, payload ); 

        // if(!res) {
        //     yield put({
        //         type: '', 
        //         error : res.errors[0].message
        //     })
        // }

        // else {
        //     yield put({
        //         type : '', 
        //         CatalogList : res.data.LabTestFrenchSearch
        //     })
        // }

    } catch (e) {

        throw new Error(e);
    }


}

function* LabCatalogUpdateTestsFetch({path, payload} : any){

    yield put({type : CatalogActions.CATALOG_LIST_UPDATE_FETCH_BEGIN})

    try {

        const res = yield call(config.callApi, 'post', config.api, path, payload ); 

        if(!res) {
            yield put({
                type: CatalogActions.CATALOG_LIST_UPDATE_FETCH_ERROR, 
                error : res.errors[0].message
            })
        }

        else {
            yield put({
                type : CatalogActions.CATALOG_LIST_UPDATE_FETCH_SUCCESS, 
                CatalogList : res.data.catalog.catalogListTests
            })
        }

    } catch (e) {

        throw new Error(e);
    }

   
}

function* catalogTestAddNewFetchTests({path, payload} : any){

    try {

        yield put({type : CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_FETCH_TESTS_FETCHING});

        const res = yield call(config.callApi, 'post', config.api, path, payload ); 

        if(!res) {
            yield put({
                type: CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_FETCH_TESTS_ERROR, 
                error : res.errors[0].message
            })
        }

        else {
            yield put({
                type : CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_FETCH_TESTS_SUCCESS, 
                CatalogList : res.data.AllLabTests_fr
            })
        }

    } catch (e) {

        throw new Error(e);

    }
}

function* catalogTestAddNewSelectTest({path, payload} : any){

    try {

        const res = yield call(config.callApi, 'post', config.api, path, payload );  

        

        if(!res) {
            yield put({
                type: CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_SELECT_TEST_ERROR, 
                error : res.errors[0].message
            })
        }

        else {
            yield put({
                type : CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_SELECT_TEST_SUCCESS, 
                payload : res.data.catalog.findCatalogTest
            })
        }

    } catch (e) {

        throw new Error(e);

    }
}

function* catalogListFetchTests ({path, payload} : any) {

    try {

        const res = yield call(config.callApi, 'post', config.api, path, payload );  

        if(!res) {
            yield put({
                type: CatalogActions, 
                error : res.errors[0].message
            })
        }

        else {
            yield put({
                type : CatalogActions.CATALOG_LIST_FETCH_TESTS_FROM_LABTESTS_SUCCESS, 
                payload : res.data.LabTestFrenchByIds
            })
        }

    } catch (e) {

        throw new Error(e);

    }
}

/**
 * 
 */
function* addUpdateTest({path, payload} : any){
    try {

        // yield put({type : CatalogActions.CATALOG_LIST_UPDATE_TEST_BY_USER_BEGIN})

        const res = yield call(config.callApi, 'post', config.api, path, payload );  

        if(!res) {
            yield put({
                type: CatalogActions.CATALOG_LIST_UPDATE_TEST_BY_USER_ERROR, 
                error : res.errors[0].message
            })
        }

        else {
            console.log(res.data)
            yield put({
                type : CatalogActions.CATALOG_LIST_UPDATE_TEST_BY_USER_SUCCESS, 
                payload : res.data
            })
        }

    } catch (e) {

        throw new Error(e);

    }
}


//watcher func dispatcher
function* watchFetchCatalogTests(){

    // TODO try to fetch test from lab catolog 
    yield takeEvery(CatalogActions.CATALOG_FETCH_ALL, catalogFetchAll)
    // TODO try to fetch test from lab catolog 
    yield takeEvery(CatalogActions.CATALOG_FETCH_DETAILS, catalogFetchDetails)
    // catalog update bfactor
    yield takeEvery(CatalogActions.CATALOG_UPDATE_BFACTOR, catalogUpdateBFactor)
    // catalog update bfactor
    yield takeEvery(CatalogActions.CATALOG_UPDATE_PRICE, catalogUpdatePrice)
    // fetch modified tests
    yield takeEvery(CatalogActions.CATALOG_FETCH_MODIFIED_TESTS, catalogModifiedTests)

    // TODO try to fetch test from lab catolog 
    yield takeEvery(CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API, LabCatalogListFetch)

    // Filter Catalog List By Name
    yield takeEvery(CatalogActions.CATALOG_LIST_FILTER_TEST_NAME, LabCatalogListFilterTestName)

    // map action to function
    yield takeEvery(CatalogActions.CATALOG_LIST_UPDATING_SAVE, LabCatalogUpdateTests)

    // map action to function
    yield takeEvery(CatalogActions.CATALOG_LIST_UPDATE_FETCH, LabCatalogUpdateTestsFetch)

    // fetch test from test lab 
    yield takeEvery(CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_FETCH_TESTS, catalogTestAddNewFetchTests)

    // fetch test from catalog
    yield takeEvery( CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_SELECT_TEST, catalogTestAddNewSelectTest)

    // fetch catalog tests from labTests
    yield takeEvery(CatalogActions.CATALOG_LIST_FETCH_TESTS_FROM_LABTESTS, catalogListFetchTests)

    // save update new test
    yield takeEvery(CatalogActions.CATALOG_LIST_UPDATE_TEST_BY_USER, addUpdateTest)

}

export function* CatalogSaga(){
    yield all([fork(watchFetchCatalogTests)])
}
