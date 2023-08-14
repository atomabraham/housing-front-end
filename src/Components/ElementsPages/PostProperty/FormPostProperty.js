import "../../../Styles/PostProperty/FormPostProperty.css"
import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import BlockImagePostPorperty from "./BlockImageFormProperty";
import { CloseMenu } from "../Banners/FirstBanner";
import BasicInformation from "./BasicInformation";
import LocationProperty from "./LocationProperty";
import ImageProperty from "./ImagesProperty";
import ContactPost from "./ContactPost";
import DetailsPost from "./DetailsPost";

function FormPostProperty() {

    return(
    <>    
        <BlockImagePostPorperty/>
        <Container onClick={CloseMenu} className="FormPostProperty" id="FormPostProperty">
            {/* Titre de la section */}
            <Row className="row rowTitleFormPP" id="rowTitleFormPP">
                <p className="text-left titleFormPP" id="titleFormPP">AJOUTER UNE PROPRIETE</p>
            </Row>

            {/* ligne */}
            <div className="lineFormPost" id="lineFormPost"></div>

            {/* formulaire d'ajout des informations sur les propriétes*/}
            <form action="" method="">
                <BasicInformation/>
                <LocationProperty/>
                <DetailsPost/>
                <ImageProperty/>
                <ContactPost/>
            </form>

        </Container>
    </>
    )
}

export default FormPostProperty