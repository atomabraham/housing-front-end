import { useEffect, useState } from "react";
import "../../../Styles/DashboardAdmin/MenuUserAdmin.css";
import axios from "../../Authentification/axios";
import { BorderColor, DeleteSweep, Lock, LockOpen } from "@mui/icons-material";
import { Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function MenuUserAdmin() {
  //liste de tous les utilisateur
  const [Users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await axios.get("http://localhost:8000/api/users").then(({ data }) => {
      setUsers(data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      {/* biens en attente de validation */}
      <Row className="rowMenuUserAdmin" id="rowMenuUserAdmin">
        <Row className="blockPropertyToValida" id="blockPropertyToValidat">
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
            {Users.map((property) => (
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
      </Row>
    </>
  );
}

export default MenuUserAdmin;
