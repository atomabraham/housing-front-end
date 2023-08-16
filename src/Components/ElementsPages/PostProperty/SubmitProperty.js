import { Row } from "react-bootstrap"
import "../../../Styles/PostProperty/FormPostProperty.css"
import FormPostController from "../../Controllers/FormPostController"

function SubmitProperty() {
    return(
        <>
            <Row>
                <label for="checkbox1" class="checkbox">
                    <input type="checkbox" className='checkbox1' id="checkbox1" />
                    <span class="checkmark"></span>
                    <span class=" label2" >  J'accept les conditions et la politique de confidentialité de HOUSING</span>
                </label>
            </Row>
            <Row>
                <button type="button" onClick={FormPostController} className="buttonSubmitProperty" id="buttonSubmitProperty">Valider</button>
            </Row>
        </>
    )
}

export default SubmitProperty