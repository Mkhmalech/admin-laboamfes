import { StaffListALL } from "./admin/staffListAll";
import { StaffAddEmployer } from './admin/staffAddEmployer';
import { StaffUpdateEmployer } from './admin/staffUpdateEmployer';


export const staffRoutes = {
    
    StaffListAll : {
        admin : {
            path : '/admin/:user/staff',
            component : StaffListALL 
        },
        web : {}
    },
    StaffAddEmployer : {
        admin : {
            path : '/admin/:user/staff/add-new-employer',
            component : StaffAddEmployer
        },
        web : {}
    },
    StaffUpdateEmployer : {
        admin : {
            path : '/admin/:user/staff/employer',
            component : StaffUpdateEmployer
        }
    }
}