/* eslint-disable spaced-comment, @typescript-eslint/no-explicit-any */
/// <reference types="react-scripts" />
/// <reference types="./authentification-redux-lib" />
/// <reference types="./ittyni-staff" />
/// <reference types="./ittyni-labsetting" />
/// <reference types="./labCatalog" />


// laboratoire fes 
// personel
// materials
// we need : Materials , LocalSite , Personals ==> labtests

// this is a product of our company
//
type LabTest = {}
type LabTestReferenceCode = string
type LabTestReferenceMnemonic = string
type LabTestReferenceCPT = string
type LabTestFinanceCountry = string
type LabTestFinanceBCode = number



interface Reference {
  code      : LabTestReferenceCode
  Mnemonic  : LabTestReferenceMnemonic
  CPT       : LabTestReferenceCPT
}

interface Finance {
  country : LabTestFinanceCountry
  bcode   :LabTestFinanceBCode
}
interface Pre_Analytic   {}

interface LabTest {
  reference     :   Reference
  finance       :   Finance
  preAnalytic  :   Pre_Analytic
}


// Personal data
// Personal = user + company's name worked for 
type ID           = string
type First_Name   = string
type Middle_Name  = string
type Last_Name    = string

interface Name {
  first_Name  : First_Name
  middle_Name : Middle_Name
  last_Name   : Last_Name
}

interface User {
  id    : ID
  name  : Name
}

type businessID = string
type businessName = string
type businessLogo = string
type businessSlogan = string
type businessLocation = string

interface Personal extends User {
  workingFor
}

interface Client extends User {

}

// Material

interface Material {
  name
  function
}

// LocalSite
type AdressStreet   = string
type AdressNum      = string
type AdressState    = string
type AdressCity     = string
type AdressCountry  = string
interface Address {}

/*************************
***** Global Functions ***
**************************/

// store
interface LaboFesState {
  // slider        : SliderState
  router        : RouterState
  auth          : AuthState
  staff         : LabStaffState
  // catalog       : CatalogState
  setting ?     : LaboSetting
}
// Global Interface
interface Window {
  INITIAL_REDUX_STATE: any
}