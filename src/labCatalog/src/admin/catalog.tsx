import React, { ReactElement } from "react";
import { Card } from "../../../ui/card";
import { CardListView } from "../../../ui/card/cardStyle";
import { Link } from "react-router-dom";
import {catalogsFetch} from '../dispatcher/catalog'
import { useSelector } from "react-redux";
interface Props {}

export default function catalog({}: Props): ReactElement {

  //-- get catalogs
  const { catalogs } = useSelector(({catalog} : any) => catalog)

  //-- 
  React.useEffect(()=>{
    catalogsFetch();
  }, [])
  
  return (
    <CardListView>
      {catalogs && catalogs.map((r:any)=>(
        <Link to={`/admin/m.khmalech/catalog/${r._id}`} key={r._id}>
        <Card
          title={r.title}
          details={r.description}
          icon="far fa-user"
        />
        </Link>
      ))}
    </CardListView>
  );
}
