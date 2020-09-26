import { combineReducers, Reducer } from "redux";
import { CatalogActions } from "./actions";

const initialState: any = {
  catalogList: [],
  addNewModal: false,
  catalogListTest: [],
  catalogListFetching: false,
  catalogModalFetchTests: false,
  fetchTest: false
};

export const catalogListReducer: Reducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_FETCHING:
      return {
        ...state,
        catalogListFetching: true
      };

    /*******************************************************
     ********** Catalog fetching functions *****************
     *******************************************************/
    // fetch all catalogs
    case CatalogActions.CATALOG_FETCH_ALL_SUCCESS:
      return { ...state, catalogs : action.payload.catalog.fetchCatalogs}

    // fetch catalog details
    case CatalogActions.CATALOG_FETCH_DETAILS_SUCCESS:
      return { ...state, catalog : action.payload.catalog.fetchCatalog}

    // update bfactor
    case CatalogActions.CATALOG_UPDATE_BFACTOR_SUCCESS:
      return { ...state, catalogbfactor : action.payload.catalog.updateCatalog}
    // fetch modified tests
    case CatalogActions.CATALOG_FETCH_MODIFIED_TESTS_SUCCESS:
      return{...state, modifiedTests : action.payload.catalog.catalogFetchModiedTest}
    // update test price
    case CatalogActions.CATALOG_UPDATE_PRICE_SUCCESS:
      return{...state, updatePrice : action.payload.catalog.catalogModiyTestPrice}
    // update test referring
    // update test reported time
    // loading while updating
    
    /*******************************************************
     ********** Modal Add New Catalog Test *****************
     *******************************************************/

    // Open Modal To Add New Test
    case CatalogActions.CATALOG_LIST_TESTS_NEW_TEST:
      return {
        ...state,
        addNewModal: true
      };

    // @modal fetch tests from labtests begin
    case CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_FETCH_TESTS_FETCHING : 
      return {
        ...state,
        catalogModalFetchTests : true
      }
    // @modal fetch tests from labTests
    case CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_FETCH_TESTS_SUCCESS:
      return {
        ...state,
        catalogList: action.CatalogList.map((o:any)=>{
          o.isLoading = false;
          return o
        }),
        catalogModalFetchTests : false
      };

    case CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_SELECT_TEST_SUCCESS: {
      return {
        ...state,
        selectedTest: action.payload
      };
    }
    // Close Modal
    case CatalogActions.CATALOG_LIST_UPDATING_MODAL_CLOSE:
      return {
        ...state,
        addNewModal: false
      };
    /*********** Modal Actions End ************************************/

    /******************************************************************
     ******************  Catalog Table fetching      ******************
     ******************************************************************/
    case CatalogActions.CATALOG_LIST_FETCH_TESTS_FROM_LABTESTS_SUCCESS : 
      const {catalogListTest} = state;
      let temp : any[] = [];
      catalogListTest.map((test : any) => {
        action.payload.map((ct : any) => {
            if(test.testId === ct.id){
                temp.push({
                    testName : ct.name.fr,
                    Bcode : ct.finance[0] ? ct.finance[0].Bcode : '-',
                    testId : ct.id,
                    testReported : test.testReported,
                    testPrice : test.testPrice,
                    testReferred : test.testReferred
                })
            }
        })
      })
      return {
          ...state,
          catalogListFetching : false,
          catalogTestsDetails : [...temp]
      }

    /*********** Modal Actions End ************************************/

    case CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API_SUCCESS:
      return {
        ...state,
        catalogListTest: [...action.catalogListTest],
        catalogListFetching: true
      };

    case CatalogActions.CATALOG_LIST_FILTER_TEST_NAME_SUCCESS:
      return {
        ...state,
        catalogList: [...action.CatalogList]
      };
    case CatalogActions.CATALOG_LIST_UPDATING_BY_USER:
      return {
        ...state,
        catalogUpdateConfirmMsg: "Voulez Vous Vraiment Continuer",
        updatedCatalog: [...action.payload]
      };

    case CatalogActions.CATALOG_LIST_UPDATE_FETCH_BEGIN:
      return {
        ...state,
        fetchTest: true
      };
    case CatalogActions.CATALOG_LIST_UPDATE_FETCH_SUCCESS:
      return {
        ...state,
        catalogListTest: [...action.CatalogList]
      };

    case CatalogActions.CATALOG_LIST_FILTER_TEST_TEST:
      console.log(action);
      return {
        ...state
      };
    default:
      return {
        ...state
      };
  }
};