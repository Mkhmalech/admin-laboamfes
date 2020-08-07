import * as React from "react";
import { useSelector } from "react-redux";
import {addRoleToAccount, fetchAccountRoles, updateAccountRolePermissions, deleteAccountRole} from '../dispatcher/setting'
import './popUps.css'

interface ILaboTeamProps { }

export const LaboTeam: React.FunctionComponent<ILaboTeamProps> = (props) => {

  // don't make more than one request
  const [count, addCount] = React.useState<number>(0)

  // get roles setting
  const { roles } = useSelector((state: any) => state.setting) || [];

  // show modal to add new
  const [add, showHideAdd] = React.useState(false);

  React.useEffect(()=>{
      fetchAccountRoles();
  }, [])
  return (
    <>
      {add && <CreateNewRole ReturnToRoles={(e: any) => {showHideAdd(!add); setTimeout(() => fetchAccountRoles(), 1000);}} />}
      {!add && <div style={{ margin: "15px" }}>
        <h1 onClick={e=>fetchAccountRoles()}>Team Status</h1>
        <button onClick={(e: any) => showHideAdd(!add)}>Ajouter status</button>
        {roles && roles.length > 0 && roles.map((r: any) => <RolesList role={r.role} permissions={r.permissions} />)}
        {!roles && <span>Loading....</span>  }
      </div>}
    </>);
};

const RolesList: React.FC<any> = ({ role, permissions }) => {
  // edit permissions
  const [permission, updatePermission] = React.useState<any>(permissions)
  // read 
  const [read, setRead] = React.useState('')
  // update permissions
  const updatePermissions = (key: number, name:any) => {
    let newPermission = [...permission]
    newPermission[key][name] = !permission[key][name]
    updatePermission(newPermission)
  }
  // select all permissions
  const selectAllpermission = (key: number, all : string[]) =>{
    let newPermission = [...permission]
    all.map(perm =>newPermission[key][perm] = true )
    updatePermission(newPermission)
  }
  // deselect all permissions
  const deSelectAllpermission = (key: number, all : string[]) =>{
    let newPermission = [...permission]
    all.map(perm =>newPermission[key][perm] = false )
    updatePermission(newPermission)
  }
  // valider update
  const valider = (role:string, p : any ) =>{
    
  }
  return (
    <ul>
      <li >
        <div style={{ display: "flex" }}>
          <b> {role} </b>
          <button onClick={e=>{deleteAccountRole(role); setTimeout(()=>fetchAccountRoles(),1000)}}>supprimer</button>
          <div><button onClick={e=>{updateAccountRolePermissions(role, permission); setTimeout(()=>fetchAccountRoles(),1000)}}>valider</button></div>
        </div>
        {
          permission.map((p:any , key: any) => (
            <ul>
              <li style={{ display: "flex", justifyContent: "space-between" }} key={p.componentName}>
                <div>module {p.componentName}</div>
                <div>Voir : <input type="checkbox" name="read" checked={p.read} onChange={e => updatePermissions(key, e.target.name) }/></div>
                <div>Modifier : <input type="checkbox" name="update" checked={p.update} onChange={e => updatePermissions(key, e.target.name) }/></div>
                <div>Creer : <input type="checkbox" name="create" checked={p.create} onChange={e => updatePermissions(key, e.target.name) }/></div>
                <div>supprimer : <input type="checkbox" name="delete" checked={p.delete} onChange={e => updatePermissions(key, e.target.name) }/></div>
                <div><button onClick={e=>selectAllpermission(key, ["read","update","create","delete"])}>Cocher tout </button></div>
                <div><button onClick={e=>deSelectAllpermission(key, ["read","update","create","delete"])}>deCocher tout </button></div>  
              </li>
            </ul>
          ))
        }
      </li>
    </ul>
  )
}

const CreateNewRole: React.FC<any> = ({ ReturnToRoles }) => {
  // admin of the account add new role
  const [status, setStatus] = React.useState<string>()
  return (
    <div>
      <h1>Creer nouveau role</h1>
      <p> <button onClick={ReturnToRoles}> return </button></p>
      <p> nom de status : <input type="text" onChange={e=>setStatus(e.target.value)}/> </p>
      <p> <button onClick={e=>addRoleToAccount(status)}> valider </button></p>
      <p> <button> annuler </button></p>
    </div>
  )
}