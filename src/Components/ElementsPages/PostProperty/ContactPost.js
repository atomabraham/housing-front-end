import "../../../Styles/PostProperty/FormPostProperty.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Form } from "react-bootstrap";

function ContactPost() {
  return (
    <>
      <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
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
              className="inputFormPost inputFormPostContactName"
              id="inputFormPostContactName"
              placeholder="Votre nom et prenom"
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
              className="inputFormPost inputFormPostContactEmail"
              id="inputFormPostContactEmail"
              placeholder="Votre addresse email"
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
              className="inputFormPost inputFormPostPhone"
              id="inputFormPostPhone"
              placeholder="Votre addresse numéro de téléphone"
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );
}

export default ContactPost;
