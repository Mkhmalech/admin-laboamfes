import * as React from 'react';
import { fetchLeave } from '../dispatcher/setting';

interface ILeaveProps {
}

export const Leave: React.FunctionComponent<ILeaveProps> = (props) => {

    // addOrList leaves
    const [addLeave, showAddLeave] = React.useState<boolean>(false);

    React.useEffect(() => {
        fetchLeave();
    }, [])
    return (
        <>
            {!addLeave && <ListExistingLeaves onClick={() => showAddLeave(!addLeave)} />}
            {addLeave && <AddNewLeave onClick={() => showAddLeave(!addLeave)} />}
        </>
    );
};

const ListExistingLeaves: React.FC<any> = ({ onClick }) => {

    return (
        <div>
            <h1>liste des Congees</h1>
            <button onClick={onClick}>ajouter Congee</button>
        </div>
    )
}

const AddNewLeave: React.FC<any> = ({ onClick }) => {

    return (
        <div>
            <h1>ajouter un conge</h1>
            <button onClick={onClick}>Retour</button>
            <p>
                <label>nom : </label>
                <input type="text" />
                <label>nombre des jours : </label>
                <input type="number" />
                <button>valider</button>
            </p>
        </div>
    )
}
