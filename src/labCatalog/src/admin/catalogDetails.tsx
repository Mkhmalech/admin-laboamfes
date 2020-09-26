import * as React from "react";
import * as table from "../../../ui/table/table";
import { fetchLabTests } from '../../../dispatcher/index'

import { useSelector } from "react-redux";
import { catalogDetailsFetch, catalogFetchModiedTest, catalogUpdateBFactor, updateCatalogListPrice, updateCatalogListReferred } from "../dispatcher/catalog";
import { useParams } from "react-router";


interface ICatalogDetailsProps { }

export const CatalogDetails: React.FC<ICatalogDetailsProps> = (props) => {

  // get catalog details
  const { catalog } = useSelector(({ catalog }: any) => catalog)

  // test list existing in ittyni.com
  const testList = useSelector((state: any) => state.catalog.catalogList) || [];

  // modified tests
  const { modifiedTests } = useSelector(({ catalog }: any) => catalog)

  // 
  const [loading, setLoading] = React.useState<string>()

  // feedbacks
  // const {modifiedTests} = useSelector(({catalog}:any) => catalog)

  // get id of catalog
  const { id }: any = useParams();

  // modify subcontractor
  const [isSubContractor, ModifySubContractor] = React.useState<boolean>(true);

  const Modal = () => {

    return (
      <h2>this is modal</h2>
    )
  }

  // before fetch catalog data
  React.useEffect(() => {
    catalogDetailsFetch(id);
    fetchLabTests();
    catalogFetchModiedTest();
  }, [])
  return (
    <div>
      <h2 >{(catalog && catalog.title) || <b>Loading...</b>}</h2>
      <h2 onClick={e => fetchLabTests()}>{(catalog && catalog.description) || <b>Loading...</b>}</h2>
      <h3 >factor : <input placeholder={`${(catalog && catalog.bFactor) || "Loading..."}`}
        onChange={e => catalogUpdateBFactor(id, Number(e.target.value))}
        onBlur={e => catalogDetailsFetch(id)}
      />
      </h3>
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

            {testList.length > 0 && testList.map((test: any) =>
              <table.ContentRow loading={loading == test.id ? true : false} key={test.id}>
                <td style={{ flex: 1 }}>{test.reference.CPT}</td>
                <td style={{ flex: 2 }}>{test.reference.Mnemonic}</td>
                <td style={{ flex: 8, cursor: "pointer" }}>{test.name.fr}</td>
                <td style={{ flex: 2 }}>
                  <EditSelect
                    initialData={modifiedTests.length > 0 &&
                      modifiedTests.find((m: any) => m.testId == test.id) ?
                      (modifiedTests.find((m: any) => m.testId == test.id).testReferred ? "Oui" : "Non")
                      :
                      (isSubContractor ? "Oui" : "Non")
                    }
                    saveChange={(referred: boolean)=>{
                      setLoading(test.id);
                      updateCatalogListReferred(id, { ...test, referred: referred });
                      setTimeout(() => fetchLabTests(), 1000);
                      setTimeout(() => setLoading(undefined), 1500);
                    }}
                  />
                </td>
                <td style={{ flex: 1 }}>{test.finance ? test.finance[0].Bcode : ''}</td>
                <td style={{ flex: 1 }}>{Math.floor(test.finance[0].Bcode * 1.34)}</td>
                <td style={{ flex: 2, color: "blue" }}>
                  <EditText initialData={test.finance[0].Bcode}
                    bfactor={catalog.bFactor}
                    saveChange={(price: any) => {
                      setLoading(test.id);
                      updateCatalogListPrice(id, { ...test, price: price });
                      setTimeout(() => fetchLabTests(), 1000);
                      setTimeout(() => setLoading(undefined), 1500);
                    }}
                    modifiedPrice={
                      modifiedTests.length > 0 &&
                        modifiedTests.find((m: any) => m.testId == test.id) ?
                        modifiedTests.find((m: any) => m.testId == test.id).testPrice
                        :
                        undefined
                    }
                  />
                </td>
                <td style={{ flex: 2, color: "green" }}>
                  {Math.floor((catalog.bFactor / 1.34) * 100)}
                </td>
              </table.ContentRow>)}
            {testList && testList.length <= 0 && <table.ContentRow loading ><td>loading</td></table.ContentRow>}
          </table.TBody>
        </table.Content>
      </table.Container>
    </div>
  )
};

// edit input 
const EditText: React.FC<any> = ({ initialData, bfactor, saveChange, modifiedPrice }) => {
  const [isModeEdit, setModeEdit] = React.useState<boolean>(false);
  const [textData, setTextData] = React.useState<any>();
  // React.useEffect(()=>{
  //   setTextData(Math.floor(initialData*bfactor));
  // })

  return (
    <>
      {isModeEdit && <>
        <input placeholder="click to edit"
          onBlur={e => { setModeEdit(false); saveChange(textData) }}
          onChange={e => setTextData(e.target.value)}
          style={{ width: '90%' }}
          autoFocus>
        </input></>}
      {!isModeEdit &&
        <span onClick={e => setModeEdit(true)} style={{ color: textData || modifiedPrice ? "Red" : "Blue" }}>
          {textData || modifiedPrice || Math.floor(initialData * bfactor)}
        </span>}
    </>
  )
}
// edit Select 
const EditSelect: React.FC<any> = ({ initialData, testReferred, saveChange }) => {
  const [isModeEdit, setModeEdit] = React.useState<boolean>(false);
  const [textData, setTextData] = React.useState<any>(initialData);
  console.log(testReferred)
  return (
    <>
      {isModeEdit && <>
        <select
          onBlur={e => {setModeEdit(false); saveChange(e.target.value == 'Oui'? true: false)}}
          onChange={e => setTextData(e.target.value)}
          autoFocus
        >

          <option>---</option>
          <option>Oui</option>
          <option>Non</option>
        </select></>}
      {!isModeEdit && <span style={{ color: textData == 'Oui' ? 'red' : 'green' }} onClick={e => setModeEdit(true)}>
        {textData}</span>
      }
    </>
  )
}
