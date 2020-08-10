import * as React from 'react';
import { Link } from 'react-router-dom';

export const StaffUpdateEmployer : React.FC<any> = ()=>{
    // get our employer 
    return(
        <div>
            <h1>Mettre a jour un employer</h1>  
            <Link to="../staff">Lister Tous</Link>
            <hr/>
            
            <ul>
                <li>info personelles</li>
                <ul>
                    <li>nom : </li>
                    <li>prenom : </li>
                    <li>mot de passe provisoire : </li>
                </ul>
                <li>info fonction equipe</li>
                <ul>
                    <li>departement : </li>
                </ul>
                <li>info finance</li>
                <ul>
                    <li>CNSS : </li>
                </ul>
            </ul>
        </div>
    )
}