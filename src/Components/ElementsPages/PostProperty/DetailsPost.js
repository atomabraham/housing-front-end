import "../../../Styles/PostProperty/FormPostProperty.css"
import { Row } from "react-bootstrap"
import { Form } from "react-bootstrap"

function DetailsPost() {
    return(
        <>
            <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                <p className="basicInformation" id="basicInformation">Détails de la propriétés</p>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="labelBlockPost" id="labelDescription">Description</Form.Label>
                <textarea type="text" className="inputFormPost inputFormPostDescription" id="inputFormPostDescription" placeholder="Donnez une brève description de votre produit" />
            </Form.Group>
        </>
    )
}

export default DetailsPost