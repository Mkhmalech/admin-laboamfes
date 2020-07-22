import * as React from "react";
import * as table from "../../../ui/table/table";
import {fetchLabTests} from '../../../dispatcher/index'

import { useSelector } from "react-redux";;

interface ICatalogDetailsProps {}

export const CatalogDetails: React.FC<ICatalogDetailsProps> = (props) => {

  const testList = useSelector((state : any) => state.catalog.catalogList) || []; 

  return (
    <div>
      <h2 onClick={e => console.log(testList)}>Catalogue titre</h2>
      <h2 onClick={e => fetchLabTests()}>Catalogue description</h2>
      <table.Container>
        <table.Header>
          <table.THead>
            <table.HeaderRow>
              <td style={{ flex: 2 }}>code</td>
              <td style={{ flex: 2 }}>mnemonic</td>
              <td style={{ flex: 8 }}>nom d analyse</td>
              <td style={{ flex: 2 }}>envoi</td>
              <td style={{ flex: 2 }}>bcode</td>
              <td style={{ flex: 2 }}>prix</td>
            </table.HeaderRow>
          </table.THead>
        </table.Header>
        <table.Content>
          <table.TBody>
            
              {testList.length > 0 && testList.map((test : any) => 
                <table.ContentRow>
                  <td style={{ flex: 2 }}>{test.reference.Mnemonic}</td>
                  <td style={{ flex: 2 }}>{test.reference.Mnemonic}</td>
                  <td style={{ flex: 8 }}>{test.name.fr}</td>
                  <td style={{ flex: 2 }}>
                    <select>
                      <option>Oui</option>
                      <option>Non</option>
                    </select>
                  </td>
                  <td style={{ flex: 2 }}>{test.finance ? test.finance[0].Bcode : ''}</td>
                  <td style={{ flex: 2 }}>{Math.floor(test.finance[0].Bcode * 1.34)}</td>
                </table.ContentRow>
              )}

          </table.TBody>
        </table.Content>
      </table.Container>
    </div>
  );
};
