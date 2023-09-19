import "../../../Styles/PostProperty/FormPostProperty.css"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import { useEffect, React } from "react";
import { click } from "@testing-library/user-event/dist/click";

function BasicInformation() {

    //controle des information d'achat ou de location
    async function ControlStatusProperty(){
        let inputFormPostStatus = document.getElementById('inputFormPostStatus')
        let informationForLocation = document.getElementById('informationForLocation')
        
        if (inputFormPostStatus.value == "A vendre"){
            informationForLocation.style.display = "none"
        }else{
            informationForLocation.style.display = "flex"
        }
    }

    //controle des information de type de proprietes
    function ControlTypeProperty(){
        let inputFormPostType = document.getElementById('inputFormPostType')
        let inputFormPostBetRoom = document.getElementById('inputFormPostBetRoom')
        let inputFormPostBadRoom = document.getElementById('inputFormPostBadRoom')
        
        if(inputFormPostType.value == "Studio"){

            inputFormPostBetRoom.value = 1
            inputFormPostBetRoom.disabled = true
            // inputFormPostBetRoom.style.borderColor = "transparent"
           
            inputFormPostBadRoom.value = 1
            inputFormPostBadRoom.disabled = true
            // inputFormPostBadRoom.style.borderColor = "transparent"
        }else{
            
            inputFormPostBetRoom.value = ''
            inputFormPostBetRoom.disabled = false
            // inputFormPostBetRoom.style.borderColor = "transparent"
           
            inputFormPostBadRoom.value = ''
            inputFormPostBadRoom.disabled = false
            // inputFormPostBadRoom.style.borderColor = "transparent"

        }
    }

    return (
        <>
                <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                    <p className="basicInformation" id="basicInformation">Information de base</p>
                </Row>
                
                {/* nom du bien */}
                <Row  style={{marginTop: '2%'}} >
                    <Form.Group className="mb-3"  >
                        <Form.Label className="labelBlockPost" id="labelBlockPostName">Nom de la propriété</Form.Label>
                        <Form.Control name="inputFormPostName" type="text"  className="inputFormPost inputFormPostName" id="inputFormPostName" placeholder="Entrer le nom de la propriété" />
                    </Form.Group>
                </Row>
                <Row>
                    <Col sm="6">
                        <Form.Group className="mb-3"  >
                            <Form.Label className="labelBlockPost" id="labelBlockPostType">Type de propriété</Form.Label>
                            <Form.Select type="text" onChange={ControlTypeProperty} className="inputFormPost inputFormPostType" id="inputFormPostType" aria-label="Entrer le nom de la propriété" >
                                <option value="Maison" selected className="optionFormPost option">Maison</option>
                                <option value="Appartement" className="optionFormPost">Appartement</option>
                                <option value="Villa" className="optionFormPost">Villa</option>
                                <option value="Studio" className="optionFormPost">Studio</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col sm="6">
                        <Form.Group className="mb-3">
                            <Form.Label className="labelBlockPost" id="labelBlockPostName">Statut de la propriété</Form.Label>
                            <Form.Select type="text" onChange={ControlStatusProperty}  className="inputFormPost select  inputFormPostStatus" id="inputFormPostStatus" aria-label="Entrer le nom de la propriété" >
                                <option>Selectionnez le statut de la propriété</option>
                                <option selected value="A vendre" className="optionFormPost1">A vendre</option>
                                <option value="A louer" className="optionFormPost">A louer</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Form.Group className="mb-3"  >
                            <Form.Label className="labelBlockPost" id="labelBlockPostBetRooms">Nombre de chambre</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostBetRoom" id="inputFormPostBetRoom" placeholder="Entrer le nombre de chambre" />
                        </Form.Group>
                    </Col>
                    <Col sm="6">
                        <Form.Group className="mb-3"  >
                            <Form.Label className="labelBlockPost" id="labelBlockPostBadRooms">Nombre de salle de bain</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostBadRoom" id="inputFormPostBadRoom" placeholder="Entrer le nombre de salle de bain" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col sm="6">
                        <Form.Group className="mb-3"  >
                            <Form.Label className="labelBlockPost" id="labelSuperficie">Superficie</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostSuperficie" id="inputFormPostSuperficie" placeholder="Entrer la superficie de la propriété" />
                        </Form.Group>
                    </Col>
                    <Col sm="6">
                        <Form.Group className="mb-3"  >
                            <Form.Label className="labelBlockPost" id="labelBlockPostBadRooms">Prix (FCFA)</Form.Label>
                            <Form.Control type="number" className="inputFormPost inputFormPostPrice" id="inputFormPostPrice" placeholder="Entrer le prix de la propriété" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row id="informationForLocation">
                    <Col sm="6">
                        <Form.Group className="mb-3"  >
                            <Form.Label className="labelBlockPost" id="labelSuperficie">Nombre de mois à verser</Form.Label>
                            <Form.Control type="number" className="inputFormPost" id="inputFormPostMonth" placeholder="Entrer le nombre de mois que le client doit versé" />
                        </Form.Group>
                    </Col>
                    <Col sm="6">
                        <Form.Group className="mb-3"  >
                            <Form.Label className="labelBlockPost" id="labelBlockPostBadRooms">Caussion à verser (en mois)</Form.Label>
                            <Form.Control type="number" className="inputFormPost" id="inputFormPostCaussion" placeholder="Entrer le montant de la caussion" />
                        </Form.Group>
                    </Col>
                </Row>
        </>
    )
}

export default BasicInformation