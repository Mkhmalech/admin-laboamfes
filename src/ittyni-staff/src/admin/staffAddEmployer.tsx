import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { TitleTablePararameters } from '../common/settingStyle';
import { useSelector } from 'react-redux';
import { staff } from '../../../admin/icons/staff';
import { addNewEmployers, listStaff } from '../dispatcher/staff';

export const StaffAddEmployer: React.FC<any> = ({ username }) => {

  // get server respond 
  const hasCreated = useSelector((state: any) => state.staff.hasCreated) || undefined;


  // declare fields
  const [firstName, setFirstName] = React.useState<string>();
  const [lastName, setLastName] = React.useState<string>();
  const [civility, setCivility] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  // Add new Employer
  const createEmployer = () => {
    const employer = {
      civility: civility,
      firstName : firstName,
      lastName : lastName,
      password : password
    }
    addNewEmployers(employer);
    // wait one second and fetch new list
    setTimeout(()=>listStaff(), 1000);

    // clear data after adding employer
    setTimeout(()=>{
      setFirstName('');
      setLastName('');
      setCivility('');
      setPassword('');
    }, 1500);
  }

  return (
    <React.Fragment>
      <div style={{ width: "90%" }}>
        <TitleTablePararameters>
          Ajouter un nouveau Employer
           </TitleTablePararameters>
        <Link to={'../staff'} > {`<- `}Retour </Link>
        <hr />
      </div>

      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h3>* Tous les chams sont requis</h3>
          </div>
          <div className="row clearfix">
            <AddPersonalInput value={lastName} label="nom" onChange={(e)=>setLastName(e.target.value)}/>
            <AddPersonalInput value={firstName} label="prenom" onChange={(e)=>setFirstName(e.target.value)}/>
          </div>
          <div className="row clearfix">
            <AddPersonalInput value={password} label="mot de passe provisoire" onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className="row clearfix">
            <div className="col_half">
              <label>Civilite</label>
              <FormFieldSelect listToChose={["----", "Mr", "Mme"]} onChange={(e: any) => setCivility(e.target.value)} width="150px" />
            </div>
          </div>
          <input className="button" type="submit" 
            value={typeof hasCreated === "undefined" ? "Envoyer": (hasCreated ? "Envoyer Autre" : "Loading...")} 
            onClick={(e)=>createEmployer()}/>
        </div>
      </div>
    </React.Fragment>
  )
}

interface FormFieldSelectProps {
  listToChose: any[]
  onChange?: (e: any) => void
  onClick?: (e: any) => void
  width?: string
  value?: string
  name?: string
}

const FormFieldSelect: React.FC<FormFieldSelectProps> = ({ listToChose, onChange, width, value, name, onClick }) => (
  <div className="select" style={{ width : width}}>
    <select value={value} name={name} id="slct" onChange={onChange} onClick={onClick}>
      {listToChose.map(dep => <option>{dep}</option>)}
    </select>
  </div>
)

interface IAddPersonalInput {
  label: string
  value: any
  onChange?: (e: any) => void
}
const AddPersonalInput: React.FC<IAddPersonalInput> = ({ label, onChange, value }) => {
  return (
    <div className="col_half">
      <label>{label}</label>
      <div className="input_field">
        <input type="text" value={value} placeholder={label} onChange={onChange} />
      </div>
    </div>
  )
}