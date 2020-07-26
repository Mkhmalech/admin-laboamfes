import { Settings } from './admin/settings';
import { LaboTeam } from './admin/laboTeam';
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
        
    },
    web : {}
}