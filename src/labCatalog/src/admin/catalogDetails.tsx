import * as React from "react";
import * as table from "../../../ui/table/table";
import {fetchLabTests} from '../../../dispatcher/index'

import { useSelector } from "react-redux";;

interface ICatalogDetailsProps {}

export const CatalogDetails: React.FC<ICatalogDetailsProps> = (props) => {

  // test list existing in ittyni.com
  const testList = useSelector((state : any) => state.catalog.catalogList) || []; 

  // factor to multiply B - default 1.34
  const [BFactor, setBFactor] = React.useState<number>(1.34);

  // modify subcontractor
  const [isSubContractor, ModifySubContractor] = React.useState<boolean>(true);

  const Modal = () => {

    return(
      <h2>this is modal</h2>
    )
  }
  return (
    <div>
      <h2 onClick={e => console.log(testList)}>Catalogue titre</h2>
      <h2 onClick={e => fetchLabTests()}>Catalogue description</h2>
      <h3>factor : <input placeholder={`${BFactor}`} onChange={e => setBFactor(Number(e.target.value))} /></h3>
      <table.Container>
        <table.Header>
          <table.THead>
            <table.HeaderRow>
              <td style={{ flex: 1 }}>code</td>
              <td style={{ flex: 2 }}>mnemonic</td>
              <td style={{ flex: 8 }}>nom d analyse</td>
              <td style={{ flex: 2 }}>envoi</td>
              <td style={{ flex: 1 }}>bcode</td>
              <td style={{ flex: 1 }}>prix</td>
              <td style={{ flex: 2 }}>S-T</td>
              <td style={{ flex: 2 }}>%</td>
            </table.HeaderRow>
          </table.THead>
        </table.Header>
        <table.Content>
          <table.TBody>
            
              {testList.length > 0 && testList.map((test : any) => 
                <table.ContentRow>
                  <td style={{ flex: 1 }}>{test.reference.CPT}</td>
                  <td style={{ flex: 2 }}>{test.reference.Mnemonic}</td>
                  <td style={{ flex: 8, cursor : "pointer" }}>{test.name.fr}</td>
                  <td style={{ flex: 2 }}>{isSubContractor ? "Oui" : "Non"}
                    {/* <select>
                      <option selected={isSubContractor ? true : false}>Oui</option>
                      <option selected={!isSubContractor ? true : false}>Non</option>
                    </select> */}
                  </td>
                  <td style={{ flex: 1 }}>{test.finance ? test.finance[0].Bcode : ''}</td>
                  <td style={{ flex: 1 }}>{Math.floor(test.finance[0].Bcode * 1.34)}</td>
                  <td style={{ flex: 2, color : "blue" }}><EditText initialData = {Math.floor(test.finance[0].Bcode * BFactor)} /></td>
                  <td style={{ flex: 2, color : "green" }}>
                    {Math.floor((BFactor/1.34)*100)}
                  </td>
                </table.ContentRow>
              )}

          </table.TBody>
        </table.Content>
      </table.Container>
    </div>
  );
};

// edit text 
const EditText : React.FC<any> = ({initialData}) =>{
  const [isModeEdit, setModeEdit] = React.useState<boolean>(false);
  const [textData, setTextData] = React.useState<any>(initialData);
  return(
    <>
      {isModeEdit && 
        <input placeholder="click to edit" 
               onBlur={e=>setModeEdit(false)} 
               onChange={e=>setTextData(e.target.value)} 
               style={{width : '98%'}}
         autoFocus>
        </input>}
      {!isModeEdit && <span onClick={e=>setModeEdit(true)}>{textData}</span>}
    </>
  )
}
