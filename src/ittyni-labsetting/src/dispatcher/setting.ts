import { store } from '../../../index';
import { SettingActions } from '../store/actions';

// add role
export const addRoleToAccount = (status? : string)=>store.dispatch({
    type : SettingActions.LAB_LABO_SETTING_ADD_NEW_ROLE,
    payload : {
        query : `mutation{team{addNewRole(status : "${status}")}}`
    },
    path : "labos"
})
// fetch existing roles
export const fetchAccountRoles = async () =>await store.dispatch({
    type : SettingActions.LAB_LABO_SETTING_LIST_ROLES,
    payload : {
        query : `query{team{fetchAccountRoles{role permissions{componentName read create update delete}}}}`
    },
    path : "labos"
})
// update existing roles
export const updateAccountRolePermissions = async (role : string, permissions:any) =>await store.dispatch({
    type : SettingActions.LAB_LABO_SETTING_ROLE_UPDATE_PERMISSIONS,
    payload : {
        query : `mutation{team{updatePermissionOfRole(role:"${role}",permissions:[${permissions.map((p:any)=>`{componentName : "${p.componentName}",read:${p.read},create:${p.create},update:${p.update},delete:${p.delete}}`)}])}}`
    },
    path : "labos"
})
// delete existing role
export const deleteAccountRole = async (role : string) =>await store.dispatch({
    type : SettingActions.LAB_LABO_SETTING_ROLE_UPDATE_PERMISSIONS,
    payload : {
        query : `mutation{team{deleteRole(role : "secretaire")}}`
    },
    path : "labos"
})
class Setting {

    private accountName : string = "Centrale du CHU Hassan II";

    // get labo Departements
    fetchDepartement = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT,
        payload : {
            query : `mutation {setting{listDepartement(accountName:"${this.accountName}"){name}}}`
        },
        path : 'labos'
    })

    // add departement
    addDepartement = (departement : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT,
        payload : {
            query:`mutation{setting{addDepartement(departement:{name:"${departement}",accountName : "${this.accountName}"})}}`
        },
        path : 'labos'
    })
    
    // fetch holiday
    fetchHoliday = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_HOLIDAY,
        payload : {
            query : `mutation {setting{listHoliday(accountName:"${this.accountName}"){holiday from to}}}`
        },
        path : 'labos'
    })
    // add holiday
    addHoliday = ({holiday, from, to} : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_HOLIDAY,
        payload : {
            query : `mutation{setting{addHoliday(holiday:{holiday:"${holiday}",from:"${from.toString()}",to:"${to.toString()}",accountName:"${this.accountName}"})}}`
        },
        path : "labos"
    })
    
    // fetch Leave
    fetchLeave = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_LEAVE,
        payload : {
            query : `mutation{setting{listLeave(accountName:"${this.accountName}"){leave duration}}}`
        },
        path : 'labos'
    })

    // add Leave
    addLeave = ({leave, duration} : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_LEAVE,
        payload : {
            query: `mutation{setting{addLeave(leave:{leave:"${leave}",duration:${duration},accountName:"${this.accountName}"})}}`
        },
        path : 'labos'
    })

    // add automate
    fetchAutomate = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_AUTOMATE,
        payload : {
            query : `mutation{setting{listAutomate(accountName:"${this.accountName}"){brand analyzer entryDate}}}`
        },
        path : 'labos'
    })

    // add automate
    addAutomate = ({brand, analyzer, entryDate} : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_AUTOMATE,
        payload : {
            query:`mutation{setting{addAutomate(automate:{brand:"${brand}",analyzer:"${analyzer}",entryDate:"${entryDate}",accountName:"${this.accountName}"})}}`
        },
        path:"labos"
    })
}

export default new Setting();