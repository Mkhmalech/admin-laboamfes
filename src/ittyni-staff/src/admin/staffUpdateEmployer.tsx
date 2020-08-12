import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchExistingEmployer } from '../dispatcher/staff';

export const StaffUpdateEmployer : React.FC<any> = ()=>{
    // get our employer 
    const employer = useSelector<any,any>(({staff})=>staff.employer)
    // get employerId
    const {id} = useSelector<any,any>(({router})=>router.location.query)

    const employerId= useLocation().search.split('=')[1];

    // before doing anything get our data
    React.useEffect(()=>{
        setTimeout(()=>fetchExistingEmployer(employerId), 500);
    }, [id, employerId])
    return(
        <div>
            <h1>Mettre a jour un employer</h1>  
            <Link to="../staff">Lister Tous</Link>
            <hr/> 
            {employer && <ul>
                <li>info personelles</li>
                <ul>
                    <li>nom : {employer.firstName}</li>
                    <li>prenom : {employer.lastName}</li>
                    <li>mot de passe provisoire : {employer.password}</li>
                </ul>
                <li>info fonction equipe</li>
                <ul>
                    <li>post occupee : {employer.role && employer.role.role} </li>
                    <li>departement : {employer.departement && employer.departement.name} </li>
                </ul>
                <li>info finance</li>
                <ul>
                    <li>CNSS : </li>
                </ul>
            </ul>}
            {!employer && <div>Loading...</div>}
        </div>
    )
}