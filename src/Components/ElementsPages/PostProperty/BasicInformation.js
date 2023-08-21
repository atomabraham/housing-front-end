import "../../../Styles/PostProperty/FormPostProperty.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';

function BasicInformation() {
    return (
        <>
                <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                    <p className="basicInformation" id="basicInformation">Information de base</p>
                </Row>
                
                {/* nom du bien */}
                <Row  style={{marginTop: '2%'}} >
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label className="labelBlockPost" id="labelBlockPostName">Nom de la propriété</Form.Label>
                        <Form.Control type="text" className="inputFormPost inputFormPostName" id="inputFormPostName" placeholder="Entrer le nom de la propriété" />
                    </Form.Group>
                </Row>
                <Row>
                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelBlockPost" id="labelBlockPostName">Type de propriété</Form.Label>
                            <Form.Select type="text" className="inputFormPost inputFormPostName" id="inputFormPostName" aria-label="Entrer le nom de la propriété" >
                                <option>Selectionnez le type de la propriété</option>
                                <option value="1" className="optionFormPost option">Maison</option>
                                <option value="2" className="optionFormPost">Appartement</option>
                                <option value="3" className="optionFormPost">Studio</option>
                                <option value="4" className="optionFormPost">Chambre</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col sm="6">
                        <div className="mb-3" controlId="">
                            <Form.Label multiple="multiple" className="labelBlockPost" id="labelBlockPostName">Statut de la propriété</Form.Label>
                            <select type="text" className="inputFormPost select  inputFormPostName" id="inputFormPostName" aria-label="Entrer le nom de la propriété" >
                                <option>Selectionnez le statut de la propriété</option>
                                <option selected value="1" className="optionFormPost1">A vendre</option>
                                <option value="2" className="optionFormPost">A louer</option>
                            </select>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelBlockPost" id="labelBlockPostBetRooms">Nombre de chambre</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostBetRoom" id="inputFormPostBetRoom" placeholder="Entrer le nombre de chambre" />
                        </Form.Group>
                    </Col>
                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelBlockPost" id="labelBlockPostBadRooms">Nombre de salle de bain</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostBadRoom" id="inputFormPostBadRoom" placeholder="Entrer le nombre de salle de bain" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelBlockPost" id="labelSuperficie">Superficie</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostSuperficie" id="inputFormPostSuperficie" placeholder="Entrer la superficie de la propriété" />
                        </Form.Group>
                    </Col>
                    <Col sm="6">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label className="labelBlockPost" id="labelBlockPostBadRooms">Prix (FCFA)</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostPrice" id="inputFormPostPrice" placeholder="Entrer le prix de la propriété" />
                        </Form.Group>
                    </Col>
                </Row>
        </>
    )
}

export default BasicInformation