type EmployerDepartement  = string
type EmployerPPR = number

interface Employer extends Person{
  departementId : EmployerDepartement
  ppr ?  : EmployerPPR 
}

interface LabStaffState {
  staff ?: [Employer];
  hasCreated?: boolean
}
// daba ghadi namchiw el partie s3iba fin initializiw a state dyalna
