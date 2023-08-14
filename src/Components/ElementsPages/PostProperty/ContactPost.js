import "../../../Styles/PostProperty/FormPostProperty.css"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Form } from "react-bootstrap"

function ContactPost(){
    return(
        <>
            <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                <p className="basicInformation" id="basicInformation">Contacts</p>
            </Row>
            <Row>
                    <Col sm="4">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelBlockPost" id="labelName">Nom et prénom</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostName" id="inputFormPostName" placeholder="Entrer la superficie de la propriété" />
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelBlockPost" id="labelBlockEmail">Email</Form.Label>
                            <Form.Control type="text" className="inputFormPost inputFormPostPrice" id="inputFEmail" placeholder="Entrer le prix de la propriété" />
                        </Form.Group>
                    </Col>
                    <Col sm="4">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelBlockPost" id="labelBlockPhone">Téléphone</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostPhone" id="inputPhone" placeholder="Entrer le prix de la propriété" />
                        </Form.Group>
                    </Col>
                </Row>
        </>
    )
}

export default ContactPost