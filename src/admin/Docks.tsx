import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Ico } from '../react-icons-sc/src/ico';
import { staff } from './icons/staff';
import { catalog } from './icons/catalog';
import { laboratory } from './icons/laboratory';
import { settings } from './icons/settings';
import { useSelector } from 'react-redux';

// appointment module
import {appointments} from '../lab-appointment/routes'

interface IDockProps {
  username: string
  closeOpenSide: () => void
}

const Dock: React.FunctionComponent<IDockProps> = ({ username, closeOpenSide }) => {
  // let role : any, permissions : any;
  //-- get permissions
  const { user } = useSelector(({auth}:any) => auth.login);

  // get account data
  // const {accounts, accounts : {role, permissions}} = user;

  const docksData = [
    // {pageLink : `/admin/${username}/account`, icon : profile, isUser : 'all'},
    {pageLink : `/admin/${username}/labo`, icon : laboratory, isUser : 'admin'},
    {component : 'Personelles', pageLink : `/admin/${username}/staff`, icon : staff, isUser : 'admin'},
    {component : 'catalogue', pageLink : `/admin/${username}/catalog`, icon : catalog, isUser : 'all'},
    {component : 'Parametres', pageLink : `/admin/${username}/settings`, icon : settings, isUser : 'admin'},
    {component : 'Appointments', pageLink : `/admin/${username}/appointments`, icon : appointments.dock.icon, isUser : 'admin'},
  ]
  React.useEffect(()=>{
    if(!user){
      console.log('updating')
    }
  }, [user])
  return (
    <>
      {user && docksData.map(({component, pageLink, icon }:any)=>{ 
        let cp : any
        if(user.accounts.role != 'supadmin'){
          cp = user.accounts.permissions.find((d:any)=> d.componentName == component)
        }
         
        return (
        <DocButton 
          isActive={pageLink == location.pathname ? true : false} 
          key={pageLink} onClick={closeOpenSide} 
          pageLink={pageLink} 
          icon={<Ico {...icon} width={30} height={30} color="rgb(0, 0, 0)"/>}
          canRead={user.accounts.role == 'supadmin' ? true : (cp ? cp.read : true)}
        />
      )})}
      
    </>
  );
};


const DocButton: React.FC<any> = ({ pageLink, icon, isActive, onClick, canRead }) => {

  // click button handler
  return (
    <>
    {canRead && <button
      onClick={isActive ? onClick : undefined}
      style={{
        backgroundColor: '#eaeaea',
        width: 50,
        backgroundSize: 50,
        fontSize: 50,
        border: 'none'
      }}>
      <Link to={pageLink} > {icon}  </Link>
    </button>}
  </>)
}

export default Dock;
