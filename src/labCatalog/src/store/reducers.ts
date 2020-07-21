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
        catalogList: [...action.CatalogList],
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