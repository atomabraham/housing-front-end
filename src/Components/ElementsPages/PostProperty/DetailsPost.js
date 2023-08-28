import { useEffect, useState } from "react";
import "../../../Styles/PostProperty/FormPostProperty.css"
import { Row } from "react-bootstrap"
import { Form } from "react-bootstrap"
import axios from "axios";

function DetailsPost() {
    // recuperation des options
    const [options, setOptions] = useState([])
    const fetchOptions = async () => {
        await axios.get(`http://localhost:8000/api/options`).then(({ data }) => {
        setOptions(data);
        });
    };

    useEffect(() => {
        fetchOptions();
    }, []);

    return(
        <>
            <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                <p className="basicInformation" id="basicInformation">Détails de la propriétés</p>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="labelBlockPost" id="labelDescription">Description</Form.Label>
                <textarea name="inputFormPostDescription" type="text" className="inputFormPost inputFormPostDescription" id="inputFormPostDescription" placeholder="Donnez une brève description de votre produit" />
            </Form.Group>
                <label for="supplement" className="labelBlockPost">Suplément de la propriété</label>
                <Form.Select type="text" className="inputFormPost supplement" id="supplement" aria-label="" >
                    <option>Selectionnez tous les suplément que contient votre propriété</option>
                    {
                        options.map ((option) => (
                            <option value={option.id} className="optionFormPost option">{option.name}</option>
                        ))    
                    }
                </Form.Select>
        </>
    )
}

export default DetailsPost