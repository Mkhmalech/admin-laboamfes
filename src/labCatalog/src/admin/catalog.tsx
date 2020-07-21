import React, { ReactElement } from "react";
import { Card } from "../../../ui/card";
import { CardListView } from "../../../ui/card/cardStyle";
import { Link } from "react-router-dom";
interface Props {}

export default function catalog({}: Props): ReactElement {
  return (
    <CardListView>
      <Link to="/admin/m.khmalech/catalog/1">
      <Card
        title="Catalogue Par Defaut"
        details="ce catalog apparrait dans tout les recherches des laboratoires"
        icon="far fa-user"
      />
      </Link>
      <Card
        title="Catalogue 1"
        details="ce catalog apparrait seulement chez les professionelles choisis"
        icon="far fa-user"
      />
      <Card
        title="Catalogue 2"
        details="ce catalog apparrait seulement chez les professionelles choisis"
        icon="far fa-user"
      />
    </CardListView>
  );
}
