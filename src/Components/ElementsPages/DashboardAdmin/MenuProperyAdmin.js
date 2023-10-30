import { useEffect, useState } from "react";
import "../../../Styles/DashboardAdmin/MenuProperyAdmin.css";
// import axios from "axios";
import axios from "../../Authentification/axios";
import { BorderColor, DeleteSweep, Lock, LockOpen } from "@mui/icons-material";
import { Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import ValidateProperty from "../../Pages/ValidateProperty";

function MenuProperyAdmin() {
  // const location = useLocation();

  //propriete disponible
  const [Properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    await axios.get("http://localhost:8000/api/properties").then(({ data }) => {
      setProperties(data);
    });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  //proprietes à valider
  const [PropertiesToValidate, setPropertiesToValidate] = useState([]);

  const fetchPropertiesToValidate = async () => {
    await axios
      .get("http://localhost:8000/api/propertiesToActive")
      .then(({ data }) => {
        setPropertiesToValidate(data);
      });
  };

  useEffect(() => {
    fetchPropertiesToValidate();
  }, []);

  //proprietes  reserver
  const [PropertiesReserver, setPropertiesReserver] = useState([]);

  const fetchPropertiesReserver = async () => {
    await axios
      .get("http://localhost:8000/api/propertiesReserved")
      .then(({ data }) => {
        setPropertiesReserver(data);
      });
  };

  useEffect(() => {
    fetchPropertiesReserver();
  }, []);

  //proprietes  vendu
  const [PropertiesVendu, setPropertiesVendu] = useState([]);

  const fetchPropertiesVendu = async () => {
    await axios
      .get("http://localhost:8000/api/propertiesVendu")
      .then(({ data }) => {
        setPropertiesVendu(data);
      });
  };

  useEffect(() => {
    fetchPropertiesVendu();
  }, []);

  //affichage des produis  disponible
  function ProprieteDisponible() {
    // let espaceTableproperty = document.getElementById("espaceTableproperty")
    let rowpropertyList = document.getElementById("rowpropertyList");
    let blockPropertyToValidate = document.getElementById(
      "blockPropertyToValidate"
    );
    let blockPropertyReserved = document.getElementById(
      "blockPropertyReserved"
    );
    let blockPropertyVendu = document.getElementById("blockPropertyVendu");

    let btnAllProperties = document.getElementById("btnAllProperties");
    let btnPropertiesEnAttente = document.getElementById(
      "btnPropertiesEnAttente"
    );
    let btnPropertieVendu = document.getElementById("btnPropertieVendu");
    let btnPropertiesReserve = document.getElementById("btnPropertiesReserve");

    rowpropertyList.style.display = "block";
    blockPropertyToValidate.style.display = "none";
    blockPropertyReserved.style.display = "none";
    blockPropertyVendu.style.display = "none";
    btnAllProperties.style.backgroundColor = "#f6b100";
    btnAllProperties.style.color = "white";
    btnPropertiesEnAttente.style.backgroundColor = "transparent";
    btnPropertiesEnAttente.style.color = "black";
    btnPropertieVendu.style.color = "black";
    btnPropertieVendu.style.backgroundColor = "transparent";
    btnPropertiesReserve.style.color = "black";
    btnPropertiesReserve.style.backgroundColor = "transparent";
  }

  //affichage des produis en attente
  function ProprieteEnAttente() {
    // let espaceTableproperty = document.getElementById("espaceTableproperty")
    let rowpropertyList = document.getElementById("rowpropertyList");
    let blockPropertyToValidate = document.getElementById(
      "blockPropertyToValidate"
    );
    let btnPropertiesEnAttente = document.getElementById(
      "btnPropertiesEnAttente"
    );
    let blockPropertyReserved = document.getElementById(
      "blockPropertyReserved"
    );
    let blockPropertyVendu = document.getElementById("blockPropertyVendu");

    let btnAllProperties = document.getElementById("btnAllProperties");
    let btnPropertieVendu = document.getElementById("btnPropertieVendu");
    let btnPropertiesReserve = document.getElementById("btnPropertiesReserve");

    rowpropertyList.style.display = "none";
    blockPropertyToValidate.style.display = "block";
    blockPropertyReserved.style.display = "none";
    blockPropertyVendu.style.display = "none";
    btnPropertiesEnAttente.style.backgroundColor = "#f6b100";
    btnAllProperties.style.backgroundColor = "transparent";
    btnAllProperties.style.color = "black";
    btnPropertiesEnAttente.style.color = "white";
    btnPropertieVendu.style.backgroundColor = "transparent";
    btnPropertieVendu.style.color = "black";
    btnPropertiesReserve.style.backgroundColor = "transparent";
    btnPropertiesReserve.style.color = "black";
  }

  //affichage des produis en reserver
  function ProprieteReserve() {
    // let espaceTableproperty = document.getElementById("espaceTableproperty")
    let rowpropertyList = document.getElementById("rowpropertyList");
    let blockPropertyToValidate = document.getElementById(
      "blockPropertyToValidate"
    );
    let btnPropertiesEnAttente = document.getElementById(
      "btnPropertiesEnAttente"
    );
    let blockPropertyReserved = document.getElementById(
      "blockPropertyReserved"
    );
    let blockPropertyVendu = document.getElementById("blockPropertyVendu");

    let btnAllProperties = document.getElementById("btnAllProperties");
    let btnPropertieVendu = document.getElementById("btnPropertieVendu");
    let btnPropertiesReserve = document.getElementById("btnPropertiesReserve");

    rowpropertyList.style.display = "none";
    blockPropertyToValidate.style.display = "none";
    blockPropertyReserved.style.display = "block";
    blockPropertyVendu.style.display = "none";
    btnPropertiesReserve.style.backgroundColor = "#f6b100";
    btnPropertiesReserve.style.color = "white";
    btnPropertiesEnAttente.style.backgroundColor = "transparent";
    btnPropertiesEnAttente.style.color = "black";
    btnAllProperties.style.backgroundColor = "transparent";
    btnAllProperties.style.color = "black";
    btnPropertieVendu.style.backgroundColor = "transparent";
    btnPropertieVendu.style.color = "black";
  }

  //affichage des produis vendu
  function ProprieteVendu() {
    // let espaceTableproperty = document.getElementById("espaceTableproperty")
    let rowpropertyList = document.getElementById("rowpropertyList");
    let blockPropertyToValidate = document.getElementById(
      "blockPropertyToValidate"
    );
    let btnPropertiesEnAttente = document.getElementById(
      "btnPropertiesEnAttente"
    );
    let blockPropertyReserved = document.getElementById(
      "blockPropertyReserved"
    );
    let blockPropertyVendu = document.getElementById("blockPropertyVendu");

    let btnAllProperties = document.getElementById("btnAllProperties");
    let btnPropertieVendu = document.getElementById("btnPropertieVendu");
    let btnPropertiesReserve = document.getElementById("btnPropertiesReserve");

    rowpropertyList.style.display = "none";
    blockPropertyToValidate.style.display = "none";
    blockPropertyReserved.style.display = "none";
    blockPropertyVendu.style.display = "block";
    btnPropertiesReserve.style.backgroundColor = "transparent";
    btnPropertiesReserve.style.color = "black";
    btnPropertiesEnAttente.style.backgroundColor = "transparent";
    btnPropertiesEnAttente.style.color = "black";
    btnAllProperties.style.backgroundColor = "transparent";
    btnAllProperties.style.color = "black";
    btnPropertieVendu.style.backgroundColor = "#f6b100";
    btnPropertieVendu.style.color = "white";
  }

  return (
    <>
    {/* menu */}
      <Row className="rowMenupropertyAdmin" id="rowMenupropertyAdmin">
        <div className="btnMenuProperty" id="btnMenuProperty">
          <button
            type="button"
            className="btnAllProperties"
            id="btnAllProperties"
            onClick={ProprieteDisponible}
          >
            DISPONIBLE
          </button>
          <button
            type="button"
            className="btnPropertiesEnAttente"
            id="btnPropertiesEnAttente"
            onClick={ProprieteEnAttente}
          >
            EN ATTENTE
          </button>
          <button
            type="button"
            className="btnPropertiesReserve"
            id="btnPropertiesReserve"
            onClick={ProprieteReserve}
          >
            DEJA RESERVER
          </button>
          <button
            type="button"
            className="btnPropertiesVendu"
            id="btnPropertieVendu"
            onClick={ProprieteVendu}
          >
            VENDU
          </button>
        </div>
        <Row className="lineMenuproperty">{/* line */}</Row>
        {/* bien disponible */}
        <Row className="rowpropertyList" id="rowpropertyList">
          <table>
            <tr className="menuEntete">
              <th className="thMenuEntete">Id</th>
              <th className="thMenuEntete">Nom</th>
              <th className="thMenuEntete">Prix</th>
              <th className="thMenuEntete">City</th>
              <th className="thMenuEntete">Status</th>
              <th className="thMenuEntete">Quartier</th>
              <th className="thMenuEntete">Image</th>
              <th className="thMenuEntete"></th>
            </tr>
            <Row className="espaceTableproperty"></Row>
            {Properties.map((property) => (
              <>
                <tr className="trMenuProperty">
                  <td className="idPropertyMenuDashboard">{property.id}</td>
                  <td>{property.propertyName}</td>
                  <td>{property.price} FCFA</td>
                  <td>{property.city}</td>
                  <td>{property.propertyStatus}</td>
                  <td>{property.quartier}</td>
                  <td>
                    <img
                      width="40px"
                      height="40px"
                      src={`http://localhost:8000/storage/images/properties/${property.image}`}
                      alt=""
                    />
                  </td>
                  <td className="editDeleteOption">
                    <button
                      type="button"
                      className="buttonEditOption"
                      id="buttonEditOption"
                    >
                      <BorderColor className="editMenu" />
                    </button>
                    <button
                      type="button"
                      /*onClick={() => deleteOption(option.id)}*/ className="buttonDeleteOption"
                    >
                      <DeleteSweep className="deleteMenu" />
                    </button>
                  </td>
                </tr>
                <Row className="espaceTableproperty"></Row>
              </>
            ))}
          </table>
        </Row>
        {/* biens en attente de validation */}
        <Row className="blockPropertyToValidate" id="blockPropertyToValidate">
          <table>
            <tr className="menuEntete">
              <th className="thMenuEntete">Id</th>
              <th className="thMenuEntete">Nom</th>
              <th className="thMenuEntete">Prix</th>
              <th className="thMenuEntete">City</th>
              <th className="thMenuEntete">Status</th>
              <th className="thMenuEntete">Quartier</th>
              <th className="thMenuEntete">Image</th>
              <th className="thMenuEntete"></th>
            </tr>
            <Row className="espaceTableproperty" id="espaceTableproperty"></Row>
            {PropertiesToValidate.map((property) => (
              <>
                <tr className="trMenuProperty">
                  <td className="idPropertyMenuDashboard">{property.id}</td>
                  <td>{property.propertyName}</td>
                  <td>{property.price} FCFA</td>
                  <td>{property.city}</td>
                  <td>{property.propertyStatus}</td>
                  <td>{property.quartier}</td>
                  <td>
                    <img
                      width="40px"
                      height="40px"
                      src={`http://localhost:8000/storage/images/properties/${property.image}`}
                      alt=""
                    />
                  </td>
                  <td className="editDeleteOption">
                    <Link to={`/property/${property.id}`}>
                      <button
                        type="button"
                        className="buttonShowProperty"
                        id="buttonEditOption"
                      >
                        VOIR
                      </button>
                    </Link>
                    <Link to={`/ValidateProperty/${property.id}`}>
                      <button
                        type="button"
                        className="buttonValidateProperty"
                        // onClick={ValidateProperty}
                      >
                        VALIDER
                      </button>
                    </Link>
                  </td>
                </tr>
                <Row className="espaceTableproperty"></Row>
              </>
            ))}
          </table>
        </Row>
        {/* bien reservé */}
        <Row className="blockPropertyReserved" id="blockPropertyReserved">
          <table>
            <tr className="menuEntete">
              <th className="thMenuEntete">Id</th>
              <th className="thMenuEntete">Nom</th>
              <th className="thMenuEntete">Prix</th>
              <th className="thMenuEntete">City</th>
              <th className="thMenuEntete">Status</th>
              <th className="thMenuEntete">Quartier</th>
              <th className="thMenuEntete">Image</th>
              <th className="thMenuEntete"></th>
            </tr>
            <Row className="espaceTableproperty" id="espaceTableproperty"></Row>
            {PropertiesReserver.map((property) => (
              <>
                <tr className="trMenuProperty">
                  <td className="idPropertyMenuDashboard">{property.id}</td>
                  <td>{property.propertyName}</td>
                  <td>{property.price} FCFA</td>
                  <td>{property.city}</td>
                  <td>{property.propertyStatus}</td>
                  <td>{property.quartier}</td>
                  <td>
                    <img
                      width="40px"
                      height="40px"
                      src={`http://localhost:8000/storage/images/properties/${property.image}`}
                      alt=""
                    />
                  </td>
                  <td className="editDeleteOption">
                    <Link to={`/property/${property.id}`}>
                      <button
                        type="button"
                        className="buttonValidateProperty"
                        // onClick={ValidateProperty}
                      >
                        VOIR
                      </button>
                    </Link>
                  </td>
                </tr>
                <Row className="espaceTableproperty"></Row>
              </>
            ))}
          </table>
        </Row>
        {/* biens vendu */}
        <Row className="blockPropertyVendu" id="blockPropertyVendu">
          <table>
            <tr className="menuEntete">
              <th className="thMenuEntete">Id</th>
              <th className="thMenuEntete">Nom</th>
              <th className="thMenuEntete">Prix</th>
              <th className="thMenuEntete">City</th>
              <th className="thMenuEntete">Status</th>
              <th className="thMenuEntete">Quartier</th>
              <th className="thMenuEntete">Image</th>
              <th className="thMenuEntete"></th>
            </tr>
            <Row className="espaceTableproperty" id="espaceTableproperty"></Row>
            {PropertiesVendu.map((property) => (
              <>
                <tr className="trMenuProperty">
                  <td className="idPropertyMenuDashboard">{property.id}</td>
                  <td>{property.propertyName}</td>
                  <td>{property.price} FCFA</td>
                  <td>{property.city}</td>
                  <td>{property.propertyStatus}</td>
                  <td>{property.quartier}</td>
                  <td>
                    <img
                      width="40px"
                      height="40px"
                      src={`http://localhost:8000/storage/images/properties/${property.image}`}
                      alt=""
                    />
                  </td>
                  <td className="editDeleteOption">
                    <Link to={`/property/${property.id}`}>
                      <button
                        type="button"
                        className="buttonValidateProperty"
                        // onClick={ValidateProperty}
                      >
                        VOIR
                      </button>
                    </Link>
                  </td>
                </tr>
                <Row className="espaceTableproperty"></Row>
              </>
            ))}
          </table>
        </Row>
      </Row>
    </>
  );
}

export default MenuProperyAdmin;
