import * as React from "react";
// import { Table, Tr, Th, Td } from "../common/listStyle";
interface ILaboTeamProps {}

export const LaboTeam: React.FunctionComponent<ILaboTeamProps> = (props) => {
  return (
    <div style={{margin:"15px"}}>
      <h1>Team Status</h1>
      <button>Ajouter status</button>
      <ul>
        <li >
          <div style={{display : "flex"}}>
            <b>Biologiste  </b>
            <button>supprimer</button>
          </div>
          <ul>
            <li style={{display : "flex", justifyContent: "space-between"}}>
              <div>module Staff</div>
              <div>Voir : <input type="checkbox" /></div>
              <div>Modifier : <input type="checkbox" /></div>
              <div>Creer : <input type="checkbox" /></div>
              <div>supprimer : <input type="checkbox" /></div>
              <div><button>Cocher tout</button></div>
              <div><button>Decocher tout</button></div>
              <div><button>valider</button></div>
            </li>
            <li style={{display : "flex", justifyContent: "space-between"}}>
              <div>module Catalogue</div>
              <div>Voir : <input type="checkbox" /></div>
              <div>Modifier : <input type="checkbox" /></div>
              <div>Creer : <input type="checkbox" /></div>
              <div>supprimer : <input type="checkbox" /></div>
              <div><button>Cocher tout</button></div>
              <div><button>Decocher tout</button></div>
              <div><button>valider</button></div>
            </li>
          </ul>
        </li>
        <li>
          <b>Technicien</b>
          <ul>
            <li style={{display : "flex", justifyContent: "space-between"}}>
              <div>module Staff</div>
              <div>Voir : <input type="checkbox" /></div>
              <div>Modifier : <input type="checkbox" /></div>
              <div>Creer : <input type="checkbox" /></div>
              <div>supprimer : <input type="checkbox" /></div>
              <div><button>Cocher tout</button></div>
              <div><button>Decocher tout</button></div>
              <div><button>valider</button></div>
            </li>
            <li style={{display : "flex", justifyContent: "space-between"}}>
              <div>module Catalogue</div>
              <div>Voir : <input type="checkbox" /></div>
              <div>Modifier : <input type="checkbox" /></div>
              <div>Creer : <input type="checkbox" /></div>
              <div>supprimer : <input type="checkbox" /></div>
              <div><button>Cocher tout</button></div>
              <div><button>Decocher tout</button></div>
              <div><button>valider</button></div>
            </li>
          </ul>
        </li>    
      </ul>
    </div>
  );
};
