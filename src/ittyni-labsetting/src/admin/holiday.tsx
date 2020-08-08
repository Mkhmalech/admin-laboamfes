import * as React from 'react';
import { Table, Tr, Th, Td } from '../../../ui';
import { useSelector } from 'react-redux';
import { fetchHoliday, addHoliday } from '../dispatcher/setting';

interface IHolidayProps {
}

export const Holiday: React.FunctionComponent<IHolidayProps> = (props) => {
  // addOrList leaves
  const [addHoliday, showAddHoliday] = React.useState<boolean>(false);

  React.useEffect(() => {

  }, [])
  return (
    <>
      {!addHoliday && <ListExistingLeaves onClick={() => showAddHoliday(!addHoliday)} />}
      {addHoliday && <AddNewHoliday onClick={() => showAddHoliday(!addHoliday)} />}
    </>
  );
};

const ListExistingLeaves: React.FC<any> = ({ onClick }) => {
  // get leaves
  const holidays = useSelector(({ setting }: any) => setting.holidays) || [];

  // component did mount
  React.useEffect(() => { fetchHoliday() }, []);

  return (
    <div>
      <h1>liste des Jours ferie</h1>
      <button onClick={onClick}>ajouter Jours ferie</button>
      <Table>
        <thead>
          <Tr>
            <Th>Jour ferie</Th>
            <Th>Nombre des jours</Th>
          </Tr>
        </thead>

        {holidays.length > 0 &&
          holidays.map((h: any) =>
            <tbody>
              <Tr>
                <Td>{h.holiday}</Td>
                <Td>{h.duration} jour</Td>
              </Tr>
            </tbody>
          )
        }
        {holidays.length <= 0 && <tbody><Tr><Td>loading...</Td></Tr></tbody>}
      </Table>
    </div>
  )
}

const AddNewHoliday: React.FC<any> = ({ onClick }) => {
  // get holiday name and duration
  const [name, setName] = React.useState<string>()
  const [duration, setDuration] = React.useState<string>()
  return (
    <div>
      <h1>ajouter Jours ferie</h1>
      <button onClick={onClick}>Retour</button>
      <p>
        <label>nom de jour ferie : </label>
        <input type="text" onChange={e => setName(e.target.value)} />
        <label>nombre des jours : </label>
        <input type="number" onChange={e => setDuration(e.target.value)} />
        <button onClick={() => addHoliday(name, duration)}>valider</button>
      </p>
    </div>
  )
}