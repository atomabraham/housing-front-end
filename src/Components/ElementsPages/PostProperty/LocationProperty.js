import "../../../Styles/PostProperty/FormPostProperty.css"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Form } from "react-bootstrap"

function LocationProperty(){
    return(
        <>
            <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                <p className="basicInformation" id="basicInformation">Localisation de la propriété</p>
            </Row>
            <Row>
                <Col sm="6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="labelBlockPost" id="labelBlockPostCountry">Pays</Form.Label>
                        <Form.Control type="text" className="inputFormPost inputFormPostCountry" id="inputFormPostCountry" placeholder="Dans quel pays se trouve la propriété" />
                    </Form.Group>
                </Col>
                <Col sm="6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="labelBlockPost" id="labelBlockPostCity">Ville</Form.Label>
                        <Form.Control type="text" className="inputFormPost inputFormPostCity" id="inputFormPostCity" placeholder="Dans quelle ville se trouve la propriété" />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="labelBlockPost" id="labelBlockAddress">Quartier</Form.Label>
                        <Form.Control type="text" className="inputFormPost inputFormAddress" id="inputFormAddress" placeholder="Entrez l'adresse de la propriété" />
                    </Form.Group>
                </Col>
                <Col sm="6">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="labelBlockPost" id="labelBlockPostalCode">Code posal (Facultatif)</Form.Label>
                        <Form.Control type="text" className="inputFormPost inputFormPostalCode" id="inputFormPostalCode" placeholder="Code postal" />
                    </Form.Group>
                </Col>
            </Row>
        </>
    )
}

export default LocationProperty