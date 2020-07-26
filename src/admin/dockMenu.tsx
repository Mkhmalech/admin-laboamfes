import * as React from 'react';
import { Link } from 'react-router-dom';

interface IDockMenuProps {
}

export const DockMenu: React.FunctionComponent<any> = ({ModuleTitle, username}) => {
  return(
      <ul>
          <li><h4>{ModuleTitle}</h4></li>
          <ul>
              <li>Conge</li>
              <li>Departement</li>
              <li>Jours Ferie</li>
              <li>Automates</li>
              <li><Link to={`/admin/${username}/settings/team`} >Team</Link></li>
          </ul>
      </ul>
  ) ;
};
