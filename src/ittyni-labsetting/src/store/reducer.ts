import { Reducer, AnyAction } from "redux";
import { SettingActions } from "./actions";

export const settingReducer: Reducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    // departement
    case SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT_SUCCESS:
      return { ...state, departements: action.payload.setting.listDepartement };

    case SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT_SUCCESS:
      return { ...state };

    // holiday
    case SettingActions.LAB_LABO_SETTING_LIST_HOLIDAY_SUCCESS:
      return { ...state, holidays: action.payload.setting.listHoliday };

    case SettingActions.LAB_LABO_SETTING_ADD_NEW_HOLIDAY_SUCCESS:
      return { ...state };

    // Leave
    case SettingActions.LAB_LABO_SETTING_LIST_LEAVE_SUCCESS:
      return { ...state, leaves: action.payload.setting.listLeave };

    case SettingActions.LAB_LABO_SETTING_ADD_NEW_LEAVE_SUCCESS:
      return { ...state };

    // automate
    case SettingActions.LAB_LABO_SETTING_LIST_AUTOMATE_SUCCESS:
      return { ...state, automates: action.payload.setting.listAutomate };

    case SettingActions.LAB_LABO_SETTING_ADD_NEW_AUTOMATE_SUCCESS:
      return { ...state };
    
    case SettingActions.LAB_LABO_SETTING_ADD_NEW_ROLE_SUCCESS:
      return { ...state, addrole : action.payload };
    
    case SettingActions.LAB_LABO_SETTING_LIST_ROLES_SUCCESS:
      return { ...state,  roles : action.payload.team.fetchAccountRoles};
    
    case SettingActions.LAB_LABO_SETTING_ROLE_UPDATE_PERMISSIONS_SUCCESS:
      return { ...state,  permissionsUpadted : action.payload};

    case SettingActions.LAB_LABO_SETTING_DELETE_ROLE_SUCCESS:
      return { ...state,  roleDeleted : action.payload};
    
    // return existing state
    default:
      return { ...state };
  }
};