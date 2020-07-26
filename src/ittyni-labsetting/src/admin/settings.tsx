import * as React from "react";
import "./settings.css";
import { settings } from "../../../admin/icons/settings";
import { Ico } from "../../../react-icons-sc/src/ico";
import { Link } from "react-router-dom";

interface ISettingsProps {}

export const Settings: React.FunctionComponent<any> = ({ username }) => {
  const settingsSubModules = [
    {
      subModuleTitle: "Departements : Lister tous les departemts ",
      subModuleDescription: "Clicker ici pour modifier les departements",
      subModuleButton: "Ouvrir Laboratoire departements",
      subModuleDiscover: "",
    },
    {
      subModuleTitle: "Jours Ferie",
      subModuleDescription: "Jours feries de laboratoire",
      subModuleButton: "modifier, ajouter les jours de vacance",
      subModuleDiscover: "",
    },
    {
      subModuleTitle: "Congees des Personnelles de laboratoire",
      subModuleDescription:
        "nombre des jours autorisees au personelles de laboratoire",
      subModuleButton: "Lister les congees",
      subModuleDiscover: "",
    },
    {
      subModuleTitle: "automates : notre technologie de qualite",
      subModuleDescription: "La Technolgies dont le labo travaille avec ",
      subModuleButton: "Ajouter une automates",
      subModuleDiscover: "",
    },
    {
      subModuleTitle: "Team de laboratoire",
      subModuleDescription: "Creer les Status de Team de votre labo",
      subModuleButton: "Clicker Pour ajouter un status a votre Team",
      subModuleDiscover: "",
      link: `/admin/${username}/settings/team`,
    },
  ];
  return (
    <div id="no-changes">
      <div className="content">
        <div className="header">
          <div className="text">
            <h1>Gestionnaire des Paramteres</h1>
            <p>
              Dans cette section Vous pouvez ajouter des parametre de
              laboartoire example : congee, automates, ...
            </p>
          </div>
          <Ico {...settings} width={73} height={70} color="rgb(36, 41, 46)" />
        </div>
        <div
          className="suggested-action-group primary replace-height"
          style={{ height: 0 }}
        />
        <div className="suggested-action-group normal">
          {settingsSubModules.map((submodule) => (
            <SubModules
              subModuleTitle={submodule.subModuleTitle}
              subModuleDescription={submodule.subModuleDescription}
              subModuleButton={submodule.subModuleButton}
              subModuleDiscover={submodule.subModuleDiscover}
              link={submodule.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const SubModules: React.FC<any> = ({
  subModuleTitle,
  subModuleDescription,
  subModuleButton,
  subModuleDiscover,
  link
}) => {
  return (
    <div className="suggested-action">
      <div className="text-wrapper">
        <h2>{subModuleTitle}</h2>
        <p className="description">{subModuleDescription}</p>
        <p className="discoverability">{subModuleDiscover}</p>
      </div>
      <Link to={link}>
        <button className="button-component" type="button">
          {subModuleButton}
        </button>
      </Link>
    </div>
  );
};
