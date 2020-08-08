import * as React from 'react';
import { Table, Tr, Th, Td } from '../../../ui';
import { useSelector } from 'react-redux';
import { fetchDepartement, addAutomate, fetchAutomate } from '../dispatcher/setting';

interface IAutomateProps {
}

export const Automate: React.FunctionComponent<IAutomateProps> = (props) => {
  // addOrList leaves
  const [addLeave, showAddLeave] = React.useState<boolean>(false);

  React.useEffect(() => {

  }, [])
  return (
    <>
      {!addLeave && <ListExistingLeaves onClick={() => showAddLeave(!addLeave)} />}
      {addLeave && <AddNewLeave onClick={() => showAddLeave(!addLeave)} />}
    </>
  );
};

const ListExistingLeaves: React.FC<any> = ({ onClick }) => {
  // get automate data
  const automates = useSelector(({ setting }: any) => setting.automates) || [];

  // first get automates
  React.useEffect(() => {
    fetchAutomate();
  }, [])
  return (
    <div>
      <h1>liste des automate</h1>
      <button onClick={onClick}>ajouter automate</button>

      <Table>
        <thead>
          <Tr>
            <Th>Marque</Th>
            <Th>Module</Th>
            <Th>MEF</Th>
          </Tr>
        </thead>

        {automates.length > 0 &&
          automates.map((a: any) =>
            <tbody>
              <Tr>
                <Td>{a.brand}</Td>
                <Td>{a.analyzer}</Td>
                <Td>{a.entryDate}</Td>
              </Tr>
            </tbody>
          )
        }
        {automates.length <= 0 && <tbody><Tr><Td>loading...</Td></Tr></tbody>}
      </Table>
    </div>
  )
}

const AddNewLeave: React.FC<any> = ({ onClick }) => {
  // get existing departement
  const departements = useSelector(({ setting }: any) => setting.departements) || [];
  // set entries data
  const [brand, setBrand] = React.useState<string>();
  const [analyzer, setAnalyser] = React.useState<string>();
  const [entryDate, setEntryDate] = React.useState<string>();
  const [unite, setUnite] = React.useState<string>();

  // first get departements
  // React.useEffect(() => {
  //   fetchDepartement();
  // }, [])
  return (
    <div>
      <h1>ajouter un Automate</h1>
      <button onClick={onClick}>Retour</button>
      <p>
        <label>Marque : </label>
        <input type="text" onChange={e => setBrand(e.target.value)} />
        <label>Unite : </label>
        <label>Module : </label>
        <input type="text" onChange={e => setAnalyser(e.target.value)} />
        <label>date de fonctionment : </label>
        <input type="date" onChange={e => setEntryDate(e.target.value)} />
        <button onClick={()=>addAutomate(brand, analyzer, entryDate)}>valider</button>
      </p>
    </div>
  )
}
