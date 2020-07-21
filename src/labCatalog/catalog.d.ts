type CatalogListTestId = string;
type CatalogListTestReported = number;
type CatalogListTestReportedValue = number;
type CatalogListTestReportedUnit = "Heures" | "Jours" | "Mois";
type CatalogListTestPrice = number;
type CatalogListTestReferred = "oui" | "non";
type CatalogListTestOptionMaterials = boolean;
type CatalogListTestOptionTransport = boolean;
type CatalogListTestOptionRemarks = string;
type CatalogListTestOptionPhlebotomist = boolean;

// // function types
// const convertReportedToMinutes = (
//   repoterted: number,
//   reportedUnit: string
// ): number =>
//   reportedUnit === "Mois"
//     ? repoterted * 24 * 30
//     : reportedUnit === "Jours"
//     ? repoterted * 24
//     : repoterted;

interface CatalogTest {
  testName: string;
  Bcode: number;
  testId: CatalogListTestId;
  testReported?: CatalogListTestReported;
  testPrice?: CatalogListTestPrice;
  testReferred?: CatalogListTestReferred;
  testOption?: CatalogOptions;
}

interface CatalogListTest {
  testId?: CatalogListTestId;
  testReported?: CatalogListTestReported;
  testPrice?: CatalogListTestPrice;
  testReferred?: CatalogListTestReferred;
}

interface Phlebotomy {
  equipement: string;
  phlebotomist: User;
}

interface CatalogOptions {
  materials: boolean;

  transport: boolean;

  remarks: string;

  phlebotomy: boolean;
}

// catalog schema
// catalog must be customized with laboratory
// and have options for searchers
interface Catalog {
  catalogList?: CatalogList[];

  catalogOptionsGlobal: CatalogOptions;
}

//Redux catalog State
interface CatalogState {

  // modal open/close
  addNewModal: boolean;

  // modal table tests
  catalogList: any[];

  // modal fetch Tests
  catalogModalFetchTests : boolean;

  // modal select test to add
  selectedTest?: CatalogTest;

  // fetched catalog list tests
  catalogListTest: any[];

  // start fetching catalog tests
  catalogListFetching: boolean;

  // fetched catalog tests details from labTests
  catalogTestsDetails? : CatalogTest[];

  //
  catalogUpdateConfirmMsg?: string;

  //
  updatedCatalog?: CatalogList[];

  //
  fetchTest: boolean;
}
