import * as React from 'react';
import { Link } from 'react-router-dom';
import { Table, Tr, Th, Td } from './listStyle';
import { TitleTablePararameters } from '../common/settingStyle';
import { staff } from '../dispatcher/staff';
import { useSelector } from 'react-redux';

export const StaffListALL: React.FC<any> = () => {

    const [dataSearch, setdataSearch] = React.useState({
        search: ''
    })

    // staff list 
    const staffState = useSelector((state: any) => state.staff.staff) || [];

    // dont fetch more than one time
    const [count, setCount] = React.useState<number>(0)

    const { search } = dataSearch;

    const onSearch = (e: any) => setdataSearch({ ...dataSearch, [e.target.name]: e.target.value })

    React.useLayoutEffect(() => {
        // staff.addNewEmployers({firstName : "mohammed", lastName : "khmalech", departement : "biochimie"})
    })

    interface FormFieldProps {
        id: string
        firstName: string
        lastName: string
        departement: string
    }

    let DataEmps: FormFieldProps[] = [
        { id: "1", firstName: "mohammed", lastName: "khmalech", departement: "biochimie" },
        { id: "2", firstName: "hicham", lastName: "bendarbi", departement: "biochimie" },
        { id: "3", firstName: "hmida", lastName: "alaoui", departement: "serologie" }
    ]
    // Search Into Table Filter
    var dataEmployes: FormFieldProps[] = [];
    // let dataEmployes : string[];

    if (DataEmps === null) {
        console.log("Spinner")
    } else {
        dataEmployes = DataEmps.filter(
            (employer) => {
                const query = search.toLowerCase();
                return employer.firstName.toLowerCase().indexOf(query) >= 0
                    || employer.lastName.toLowerCase().indexOf(query) >= 0
                    || employer.departement.toLowerCase().indexOf(query) >= 0
            }
        );
    }

    let Employes;
    Employes = staffState.map((em: any) => (
        <Tr key={em.id}>
            <Td>
                {em.firstName}
            </Td>
            <Td>
                {em.lastName}
            </Td>
            <Td>
                {em.ppr}
            </Td>
            <Td>
                {em.departement && em.departement.name}
            </Td>
        </Tr>
    ))

    const staffTbody = <tbody>{
        staffState.map((em: any) => (
            <Tr key={em.id}>
                <Td>
                    {em.firstName}
                </Td>
                <Td>
                    {em.lastName}
                </Td>
                <Td>
                    {em.ppr}
                </Td>
                <Td>
                    {em.departement && em.departement.name}
                </Td>
            </Tr>
        ))}</tbody>

    React.useEffect(() => {
        if (staffState.length <= 0 && count == 0 ) {
            staff.listStaff();
            setCount(count + 1);
        }
    }, [staffState])

    return (
        <div style={{ width: "90%" }}>
            <TitleTablePararameters>
                List des Personelles de laboratoire CHU
            </TitleTablePararameters>

            <Link to={'./staff/add-new-employer'} >Ajouter Nouveau </Link>

            <hr />
            <div>
                <input placeholder="Search" name="search" value={search} onChange={e => onSearch(e)} />
            </div>
            <hr />
            <Table>
                <thead>
                    <Tr>
                        <Th>nom</Th>
                        <Th>Prenom</Th>
                        <Th>PPR</Th>
                        <Th>unite</Th>
                        <Th>Operation</Th>
                    </Tr>
                </thead>

                {/* Tbody Table */}
                <tbody>{
                    staffState.map((em: any) => ( em.id  &&
                        <Tr key={em.id}>
                            <Td>
                                {em.firstName}
                            </Td>
                            <Td>
                                {em.lastName}
                            </Td>
                            <Td>
                                {em.ppr}
                            </Td>
                            <Td>
                                {em.departement && em.departement.name}
                            </Td>
                            <Td>
                                <Delete onClick={()=>{
                                    staff.deleteEmployer(em.id);
                                    setTimeout(()=>staff.listStaff(), 1000)
                                }}/>
                            </Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

const Delete = ({ onClick }: any) =>
    <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="10pt"
        height="10pt"
        onClick={onClick}
        x="0px" y="0px" viewBox="0 0 512 512">
        <g>
            <path d="M498.344,407.68L348.16,255.787l151.893-151.893C508.587,95.36,512,85.12,512,74.88c0-10.24-3.413-20.48-11.947-27.307
                        l-35.84-35.84c-15.36-15.36-40.96-15.36-56.32,0L256,163.627L104.106,11.733c-15.36-15.36-40.96-15.36-56.32,0l-35.84,35.84
                        C5.12,54.4,0,64.64,0,74.88s5.12,20.48,11.947,29.013L163.84,255.787L11.946,407.68c-15.36,15.36-15.36,40.96,0,56.32l35.84,35.84
                        c15.36,15.36,40.96,15.36,56.32,0l151.893-151.893L407.891,499.84c6.827,6.827,17.067,11.947,27.307,11.947
                        c10.24,0,20.48-3.413,27.307-11.947l35.84-35.84c6.827-6.827,11.947-17.067,11.947-29.014
                        C510.291,424.746,506.878,414.506,498.344,407.68z M476.16,440.107l-35.84,35.84c-3.413,3.413-5.12,3.413-8.534,0l-163.84-163.84
                        c-1.706-3.413-6.827-5.12-11.946-5.12s-8.534,1.707-11.946,5.12l-163.84,163.84c-3.413,3.413-5.12,3.413-8.534,0l-35.84-35.84
                        c-1.706-1.707-1.706-5.12,0-8.534l163.84-163.84c3.413-3.413,5.12-6.827,5.12-11.946c0-5.12-1.707-8.534-5.12-11.947L35.84,80
                        c-1.706-1.706-1.706-3.413-1.706-5.12s0-3.413,1.706-3.413l35.84-35.84c3.413-3.413,5.12-3.413,8.534,0l163.84,163.84
                        c6.827,6.827,17.067,6.827,23.893,0l163.84-163.84c3.413-3.413,5.12-3.413,8.534,0l35.84,35.84
                        c1.706,1.706,1.706,3.413,1.706,3.413c0,1.706,0,3.413-1.707,3.413l-163.84,163.84c-6.827,6.827-6.827,17.067,0,23.893
                        l163.84,163.84c1.707,1.707,1.707,3.413,1.707,3.413C477.867,436.693,477.867,438.4,476.16,440.107z" />
        </g>
    </svg>
