import * as React from "react";
import { useSelector } from "react-redux";
// import { Table, Tr, Th, Td } from "../common/listStyle";
import { PopUp } from './popUps'
import './popUps.css'

interface ILaboTeamProps { }

export const LaboTeam: React.FunctionComponent<ILaboTeamProps> = (props) => {

  // get roles setting
  const { roles } = useSelector((state: any) => state.setting);

  // show modal to add new
  const [add, showHideAdd] = React.useState(false);
  return (
    <>
      {add && <CreateNewRole ReturnToRoles={(e: any) => showHideAdd(!add)} />}
      {!add && <div style={{ margin: "15px" }}>
        <h1>Team Status</h1>
        <button onClick={(e: any) => showHideAdd(!add)}>Ajouter status</button>
        {roles.map((r: any) => <RolesList role={r.role} permissions={r.permissions} />)}
      </div>}
    </>);
};

const RolesList: React.FC<any> = ({ role, permissions }) => {

  return (
    <ul>
      <li >
        <div style={{ display: "flex" }}>
          <b> {role} </b>
          <button>supprimer</button>
        </div>
        {
          permissions.map((p: any) => (
            <ul>
              <li style={{ display: "flex", justifyContent: "space-between" }}>
                <div>module {p.moduleName}</div>
                <div>Voir : <input type="checkbox" checked={p.read} /></div>
                <div>Modifier : <input type="checkbox" checked={p.update} /></div>
                <div>Creer : <input type="checkbox" checked={p.create} /></div>
                <div>supprimer : <input type="checkbox" checked={p.delete} /></div>
                <div><button>Cocher tout</button></div>
                <div><button>Decocher tout</button></div>
                <div><button>valider</button></div>
              </li>
            </ul>
          ))
        }
      </li>
    </ul>
  )
}

const CreateNewRole: React.FC<any> = ({ ReturnToRoles }) => {
  return (
    <div>
      <h1>Creer nouveau role</h1>
      <p> <button onClick={ReturnToRoles}> return </button></p>
      <p> nom de status : <input type="text" /> </p>
      <p> <button> valider </button></p>
      <p> <button> annuler </button></p>
    </div>
  )
}