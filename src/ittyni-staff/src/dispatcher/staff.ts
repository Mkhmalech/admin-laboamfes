import { store } from "../../../index";
import { StaffActions } from "../store/actions";

const accountName: string = "FES";

/**
 * fetch employers
 */
export const listStaff = () => store.dispatch({
    type: StaffActions.LIST_ALL_EMPLOYERS,
    payload: {
      query: `query{employerListAll(accountName:"${accountName}"){id firstName lastName password}}`,
    },
    path: "labos/staff",
});

/**
 * Add new employers
 */
export const addNewEmployers = (employer: any) => store.dispatch({
    type: StaffActions.ADD_EMPLOYER,
    payload: {
      query: `mutation{employerAddNew(employer:{civility:"${employer.civility}" firstName:"${employer.firstName}" lastName:"${employer.lastName}" password:"${employer.password}" accountName:"${accountName}"})}`
    },
    path: "labos/staff",
});
/**
 * fetch existing employer
 */
export const fetchExistingEmployer = (employerId: string) => store.dispatch({
    type: StaffActions.ADD_EMPLOYER,
    payload: {
      query: `query{fetchExistingEmployer(employerId:"5f301d5ae06c9c23f417e0e7",accountName:"FES"){firstName id addedBy civility lastName password}}`
    },
    path: "labos/staff",
});

/**
 * delete employer
 */
export const deleteEmployer = (empId: string) => store.dispatch({
  type: StaffActions.DELETE_EXISTING_EMPLOYERS,
  payload: {
    query: `mutation{employerDelete(id : "${empId}")}`,
  },
  path: "labos/staff",
})