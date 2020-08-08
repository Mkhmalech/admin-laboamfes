import * as React from 'react';
import { fetchLeave, addLeave } from '../dispatcher/setting';
import { Table, Tr, Th, Td } from '../../../ui';
import { useSelector } from 'react-redux';

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

    // get leaves data
    const leaves = useSelector(({ setting }: any) => setting.leaves) || [];
    // fetch data on mount
    React.useEffect(()=>{
        fetchLeave();
    },[])
    return (
        <div>
            <h1>liste des Congees</h1>
            <button onClick={onClick}>ajouter Congee</button>
            <Table>
                <thead>
                    <Tr>
                        <Th>Jour ferie</Th>
                        <Th>Nombre des jours</Th>
                    </Tr>
                </thead>

                {leaves.length > 0 &&
                    leaves.map((l: any) =>
                        <tbody>
                            <Tr>
                                <Td>{l.leave}</Td>
                                <Td>{l.duration} jour</Td>
                            </Tr>
                        </tbody>
                    )
                }
                {leaves.length <= 0 && <tbody><Tr><Td>loading...</Td></Tr></tbody>}
            </Table>
        </div>
    )
}

const AddNewLeave: React.FC<any> = ({ onClick }) => {
    // get leave name and duration
    const [leave, setLeave] = React.useState<string>()
    const [duration, setDuration] = React.useState<string>()
    return (
        <div>
            <h1>ajouter un conge</h1>
            <button onClick={onClick}>Retour</button>
            <p>
                <label>nom : </label>
                <input type="text" onChange={e=>setLeave(e.target.value)}/>
                <label>nombre des jours : </label>
                <input type="number" onChange={e=>setDuration(e.target.value)}/>
                <button onClick={()=>addLeave(leave, duration)}>valider</button>
            </p>
        </div>
    )
}
