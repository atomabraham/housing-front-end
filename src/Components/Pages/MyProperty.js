import { useEffect, useState } from "react";
import "../../Styles/MyProperty.css";
import Navbar from "../ElementsPages/Banners/Navbar";
import axios from "../Authentification/axios";
import { useParams } from "react-router-dom";
import { BorderColor, DeleteSweep } from "@mui/icons-material";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../ElementsPages/Footer/Footer";
// import axios from "axios";

function MyProperty() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [propertiesUser, setPropertiesUser] = useState(null);

  useEffect(() => {
    // Effectue une requête HTTP GET à l'API pour récupérer les données de l'utilisateur
    axios
      .get(`http://localhost:8000/api/user`)
      .then((response) => {
        setUser(response.data.data); // Affecte les données de l'utilisateur à la variable d'état "user"
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //recuperation des propriete de l'utilisateur
  const [Properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    await axios
      .get(`http://localhost:8000/api/propertyUsers/${id}`)
      .then(({ data }) => {
        setProperties(data);
      });
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  //proprietes en entente
  const [PropertiesToValidate, setPropertiesToValidate] = useState([]);

  const fetchPropertiesToValidate = async () => {
    await axios
      .get("http://localhost:8000/api/propertiesToActive")
      .then(({ data }) => {
        setPropertiesToValidate(data);
      });
  };

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div className="row blockPropertiesUser" id="blockPropertiesUser">
            {/* tous les biens*/}
            <Row className="rowpropertyList" id="rowpropertyList">
              {/* bien disponible */}
              <Row className="rowpropertyList" id="rowpropertyList">
                <table>
                  <tr className="menuEntete">
                    <th className="thMenuEntete">Image</th>
                    <th className="thMenuEntete">Nom</th>
                    <th className="thMenuEntete">Prix</th>
                    <th className="thMenuEntete">City</th>
                    <th className="thMenuEntete">Status</th>
                    <th className="thMenuEntete">Validé</th>
                    <th className="thMenuEntete">Reservé</th>
                    <th className="thMenuEntete">Vendu</th>
                    <th className="thMenuEntete"></th>
                  </tr>
                  <Row className="espaceTableproperty"></Row>
                  {Properties.map((property) => (
                    <>
                      <tr className="trMenuProperty">
                        <td>
                          <img
                            width="40px"
                            height="40px"
                            src={`http://localhost:8000/storage/images/properties/${property.image}`}
                            alt=""
                          />
                        </td>
                        <td>{property.propertyName}</td>
                        <td>{property.price} FCFA</td>
                        <td>{property.city}</td>
                        <td>{property.propertyStatus}</td>
                        <td>
                          {property.active == "true" ? (
                            <>Oui</>
                          ) : (
                            <>En attente</>
                          )}
                        </td>
                        <td>
                          {property.reserver == "false" &&
                          property.vendu == "false" ? (
                            <></>
                          ) : (
                            <>
                              <Link to={``} className="confirmReservation">
                                Confirmer
                              </Link>
                            </>
                          )}
                        </td>
                        <td>
                          {property.vendu == "true" ? (
                            <>Oui</>
                          ) : (
                            <>Pas encore</>
                          )}
                        </td>
                        <td className="editDeleteOption">
                          <Link
                            to={`/edit/property/${property.id}`}
                            className="buttonEditOption"
                            id="buttonEditOption"
                          >
                            <BorderColor className="editMenu" />
                          </Link>
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
            </Row>
            {/* biens en attente de validation */}
          </div>
          <Footer />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default MyProperty;
