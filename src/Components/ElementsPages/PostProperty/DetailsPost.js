import "../../../Styles/PostProperty/FormPostProperty.css"
import { Row } from "react-bootstrap"

function DetailsPost() {
    return(
        <>
            <Row className="rowBasicInformationTitle" id="rowBasicInformationTile">
                <p className="basicInformation" id="basicInformation">Détails de la propriétés</p>
            </Row>
        </>
    )
}

export default DetailsPost