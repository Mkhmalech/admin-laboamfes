import { Settings } from './admin/settings';
import { LaboTeam } from './admin/laboTeam';
import { Automate } from './admin/automate';
import { Departement } from './admin/departement';
import { Holiday } from './admin/holiday';
import { Leave } from './admin/leave';
export const settingRoutes = {
    admin : {
        laboSetting : {
            path : "/admin/:user/settings",
            component : Settings
        },
        
        laboSettingTeam : {
            path : "/admin/:user/settings/team",
            component : LaboTeam
        },
        laboSettingAutomate : {
            path : "/admin/:user/settings/automates",
            component : Automate
        },
        laboSettingDepartement : {
            path : "/admin/:user/settings/departements",
            component : Departement
        },
        laboSettingHoliday : {
            path : "/admin/:user/settings/jours-feries",
            component : Holiday
        },
        laboSettingLeave : {
            path : "/admin/:user/settings/conge-des-personelles",
            component : Leave
        },
        
    },
    web : {}
}