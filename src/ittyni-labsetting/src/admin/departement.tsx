import * as React from 'react';
import { fetchDepartement, addDepartement } from '../dispatcher/setting';
import { Table, Tr, Th, Td } from '../../../ui';
import { useSelector } from 'react-redux';

interface IDepartementProps {
}

export const Departement: React.FunctionComponent<IDepartementProps> = (props) => {
  // addOrList leaves
  const [addDepartement, showAddDepartement] = React.useState<boolean>(false);

  React.useEffect(() => {
    fetchDepartement();
  }, [])
  return (
    <>
      {!addDepartement && <ListExistingLeaves onClick={() => showAddDepartement(!addDepartement)} />}
      {addDepartement && <AddNewDepartement onClick={() => showAddDepartement(!addDepartement)} />}
    </>
  );
};

const ListExistingLeaves: React.FC<any> = ({ onClick }) => {
  // get our departement
  const departements = useSelector(({ setting }: any) => setting.departements) || [];

  // before mount fetch data
  React.useEffect(() => {
    fetchDepartement();
  }, [])
  return (
    <div>
      <h1>liste des Departements</h1>
      <button onClick={onClick}>ajouter Departement</button>
      <Table>
        <thead>
          <Tr>
            <Th>departement</Th>
          </Tr>
        </thead>
        {departements.length > 0 &&
          <tbody>
            {departements.map((p: any) =>
              <Tr>
                <Td>{p.name}</Td>
              </Tr>
            )}
          </tbody>
        }
        {departements.length <= 0 && <tbody><Tr><Td>loading...</Td></Tr></tbody>}
      </Table>
    </div>
  )
}

const AddNewDepartement: React.FC<any> = ({ onClick }) => {
  // get new departement
  const [departement, setDepartement] = React.useState<string>()
  return (
    <div>
      <h1>ajouter un conge</h1>
      <button onClick={onClick}>Retour</button>
      <p>
        <label>nom de Departement : </label>
        <input type="text" onChange={e => setDepartement(e.target.value)} />
        <button onClick={() => addDepartement(departement)}>valider</button>
      </p>
    </div>
  )
}