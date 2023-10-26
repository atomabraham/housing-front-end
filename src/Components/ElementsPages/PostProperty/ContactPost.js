import { useEffect, useState } from "react";
import "../../../Styles/PostProperty/FormPostProperty.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";
import axios from "../../Authentification/axios";

function ContactPost() {
  //verifier si un utilisateur est connecter

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Effectue une requête HTTP GET à l'API pour récupérer les données de l'utilisateur
    axios
      .get("http://localhost:8000/api/user")
      .then((response) => {
        setUser(response.data.data); // Affecte les données de l'utilisateur à la variable d'état "user"
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      {user ? (
        <>
          <Row
            className="rowBasicInformationTitle"
            id="rowBasicInformationTile"
          >
            <p className="basicInformation" id="basicInformation">
              Contacts
            </p>
          </Row>
          <Row>
            <Col sm="4">
              <Form.Group className="mb-3">
                <Form.Label className="labelBlockPost" id="labelName">
                  Nom et prénom
                </Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  className="inputFormPost inputFormPostContactName"
                  id="inputFormPostContactName"
                  // placeholder="Votre nom et prenom"
                  value={`${user.name}` + ` ` + `${user.secondname}`}
                />
              </Form.Group>
            </Col>
            <Col sm="4">
              <Form.Group className="mb-3">
                <Form.Label className="labelBlockPost" id="labelBlockEmail">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  disabled
                  className="inputFormPost inputFormPostContactEmail"
                  id="inputFormPostContactEmail"
                  // placeholder="Votre addresse email"
                  value={user.email}
                />
              </Form.Group>
            </Col>
            <Col sm="4">
              <Form.Group className="mb-3">
                <Form.Label className="labelBlockPost" id="labelBlockPhone">
                  Téléphone
                </Form.Label>
                <Form.Control
                  type="number"
                  disabled
                  className="inputFormPost inputFormPostPhone"
                  id="inputFormPostPhone"
                  // placeholder="Votre addresse numéro de téléphone"
                  value={user.phone}
                />
              </Form.Group>
            </Col>
          </Row>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ContactPost;
