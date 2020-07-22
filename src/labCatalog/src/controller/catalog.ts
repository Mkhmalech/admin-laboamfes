import { Dispatch } from "redux";
import { CatalogActions } from "../store/actions";

export class CatalogClass {
  private dispatch: Dispatch;

  private catalogTest: any = {};
  private selectedTest: any = {};

  private token: string;

  private reportedValue?: any;
  private reportedUnit?: any;

  constructor(dispatch: Dispatch, token: string) {
    this.dispatch = dispatch;

    this.token = token;
  }

  catalogTestSave = () => {
    this.setTestReported();
    this.dispatch({
      type: CatalogActions.CATALOG_LIST_UPDATE_TEST_BY_USER,
      payload: {
        query: `query {
          catalog {
            addupdateTest(addUpdate:{
              laboName : "FES",
              catalogList : {
                testId : "${this.selectedTest.testId}",
                testReported : ${this.selectedTest.testReported},
                testReferred : "${this.selectedTest.testReferred}",
                testPrice : ${this.selectedTest.testPrice}
              },
              token : "${this.token}"      
            })
          }
        }`
      },
      path: "labos"
    });
  };
  saveData = () => {};
  // this.dispatch({
  //   type: CatalogActions.CATALOG_LIST_UPDATING_SAVE,
  //   token: this.token,
  //   payload: {
  //     query: `query {
  //       catalog {
  //         laboCatalogListing( catalogUpdate :{
  //           laboName : "FES",
  //           catalogList : [${this.catalogTest.map(
  //             test => `{
  //                 testId : "${test.testId}",
  //                 testReported : ${test.testReported},
  //                 testPrice : ${test.testPrice},
  //                 testReferred : "${test.testReferred}"
  //               }`
  //           )}],
  //           token:"${this.token}"}){
  //             testPrice
  //             testReported
  //             testReferred
  //            }
  //       }
  //     }`
  //   },
  //   path: "labos"
  // });

  fetchExistingCatalog = () =>
    this.dispatch({
      type: CatalogActions.CATALOG_LIST_ALL_TESTS_FROM_API,
      path: "labos",
      payload: {
        query: `query {
          catalog {
            findCatalogTests(laboName : "FES"){
              testId
              testReported
              testPrice
              testReferred
            }
          }
        }`
      }
    });

  fetchCatalogTests = (ids: string[]) =>
    this.dispatch({
      type: CatalogActions.CATALOG_LIST_FETCH_TESTS_FROM_LABTESTS,
      path: "tests",
      payload: {
        query: `query {
      LabTestFrenchByIds(ids : [${ids.map(id => `"${id}"`)}]){
        id
        name{
          fr
        }
        finance{
          Bcode
        }
        reference{
          Mnemonic
        }
      }
    }`
      }
    });

  fetchCatalogTest = (catalogList: any[]) => {
    // this.dispatch({type : CatalogActions.CATALOG_LIST_FILTER_TEST_TEST})
    const payload = catalogList.map((test: any) => ({
      testId: test.id,
      testName: test.name.fr,
      Bcode: test.finance && test.finance[0] ? test.finance[0].Bcode : null
    }));

    this.dispatch({
      type: CatalogActions.CATALOG_LIST_UPDATE_FETCH,
      path: "labos",
      payload: {
        query: `query {
            catalog {
              catalogListTests(listTests : {
                laboName : "FES",
                updates : [${payload.map(
                  pl => `{
                  testId : "${pl.testId}"
                  Bcode : ${pl.Bcode}
                  testName : "${pl.testName}"
                }`
                )}]
              }){
                Bcode
                testId
                testName
                testReported
                testPrice
                testReferred
              }
            }
          }`
      }
    });
  };
  filterCatalogList = (name: string) =>
    this.dispatch({
      type: CatalogActions.CATALOG_LIST_FILTER_TEST_NAME,
      path: "tests",
      payload: {
        query: `query { LabTestFrenchSearch(query : "${name}" ){ id name { fr } finance { Bcode } } }` }
  });

  // set if Catalog test is
  // referred to another lab
  // setCatalogListReferring = (referred : CatalogListTestReferred) => this.referred = referred;

  // set Catalog referring price
  // setCatalogListReported = (reported : number, reportedUnit : string) =>
  //   // this.reported = convertReportedToHours(reported, reportedUnit);

  debug = () =>
    this.dispatch({
      type: CatalogActions.CATALOG_LIST_UPDATING_BY_USER,
      payload: this.catalogTest
    });
  debugging = () => {
    this.setTestReported();
    console.log(this.selectedTest);
  };
  // Modal events function

  addNewTest = () =>
    this.dispatch({
      type: CatalogActions.CATALOG_LIST_TESTS_NEW_TEST
    });

  fetchLabTests = () =>
    this.dispatch({
      type: CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_FETCH_TESTS,
      path: "tests",
      payload: {
        query: `query {
          AllLabTests_fr{
            id
            name{
              fr
            }
            finance{
              Bcode
            }
            reference{
              Mnemonic
            }
          }
        }`
      }
    });

  catalogTestSelected = (testId: string, testName: string, bcode: number) =>
    this.dispatch({
      type: CatalogActions.CATALOG_LIST_TESTS_NEW_TEST_SELECT_TEST,
      path: "labos",
      payload: {
        query: `query {
          catalog {
            findCatalogTest(labTest : {
              laboName  : "FES",
              testId    : "${testId}",
              testName  : "${testName}"
              Bcode     : ${bcode}
            }){
              testId
              testName
              Bcode
              testReported
              testPrice
              testReferred
            }
          }
        }`
      }
    });
  /**
   *
   */
  setSelectedTest = (test: any) => {
    if (test) {
      this.selectedTest.testId = test.testId;
      this.selectedTest.testPrice = test.testPrice
        ? test.testPrice
        : Math.floor(test.Bcode * 1.34);
      this.selectedTest.testReferred =
        test.testReferred !== null ? test.testReferred : "oui";
      this.selectedTest.testReported =
        test.testReported !== null ? test.testReported : 1;
    }
  };
  /**
   *
   */
  setTestReferred = (e: any) =>
    (this.selectedTest.testReferred = e);
  /**
   *
   */
  setTestPrice = (e: any) => (this.selectedTest.testPrice = e);
  /**
   *
   */
  setTestReportedValue = (e: any) =>
    (this.reportedValue = <number>e);
  /**
   *
   */
  setTestReportedUnit = (e: any) =>
    (this.reportedUnit = e);
  /**
   *
   */
  setTestReported = (): number => {
    typeof this.reportedUnit !== "undefined"
      ? (this.reportedUnit = this.reportedUnit)
      : (this.reportedUnit = "Heures");
    typeof this.reportedValue !== "undefined"
      ? (this.reportedValue = this.reportedValue)
      : (this.reportedValue = 1);

    return (this.selectedTest.testReported = this.convertReportedToHours(
      this.reportedValue,
      this.reportedUnit
    ));
  };

  /**
   * convert day or mounth to hours
   * @param value
   * @param unit
   */
  convertReportedToHours = (value: number, unit: string): number =>
    unit === "Mois" ? value * 24 * 30 : unit === "Jours" ? value * 24 : value;

  /**
   * @params a: any, testName: []
   * @return int
   **/

  getIndexIfExist = (a: any[], testname: any): number =>
    a.findIndex(e => e.testId === testname);

  /**
   * verifying if variable is set
   * @params variable
   * @return boolean
   */
  isVarNotEmpty<T>(variable: T): boolean {
    return typeof variable === "undefined" ? false : true;
  }

  /**
   * Close Modal Catalog Updating
   */
  ModulConfirmationClose = () =>
    this.dispatch({ type: CatalogActions.CATALOG_LIST_UPDATING_MODAL_CLOSE });
}
