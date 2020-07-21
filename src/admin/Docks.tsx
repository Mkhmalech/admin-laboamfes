import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Ico } from '../react-icons-sc/src/ico';
import { profile } from './icons/profile';
import { staff } from './icons/staff';
import { catalog } from './icons/catalog';
import { useSelector } from 'react-redux';
import { settings } from './icons/settings';
import { settingRoutes } from '../ittyni-labsetting/src';

interface IDockProps {
  username: string
  closeOpenSide: () => void
}

const Dock: React.FunctionComponent<IDockProps> = ({ username, closeOpenSide }) => {

  // get location from state
  const {pathname} = useLocation()

  const docksData = [
    {pageLink : `/admin/${username}/account`, icon : profile, isUser : 'all'},
    {pageLink : `/admin/${username}/staff`, icon : staff, isUser : 'admin'},
    {pageLink : `/admin/${username}/catalog`, icon : catalog, isUser : 'all'},
    {pageLink : settingRoutes.admin.laboSetting.path, icon : settings, isUser : 'admin'},
  ]

  return (
    <>
      {docksData.map(({pageLink, icon }:any)=>{
        return (
        <DocButton isActive={pageLink == location.pathname ? true : false} key={pageLink} onClick={closeOpenSide} pageLink={pageLink} icon={<Ico {...icon} width={30} height={30} color="rgb(0, 0, 0)"/>}/>
      )})}
      
    </>
  );
};


const DocButton: React.FC<any> = ({ pageLink, icon, isActive, onClick }) => {

  // click button handler

  return (
    <button
      onClick={isActive ? onClick : undefined}
      style={{
        backgroundColor: '#eaeaea',
        width: 50,
        backgroundSize: 50,
        fontSize: 50,
        border: 'none'
      }}>
      <Link to={pageLink} > {icon}  </Link>
    </button>
  )
}

export default Dock;
