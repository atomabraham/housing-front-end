import "../../../Styles/PostProperty/PostProperty.css"
import ImageBlockPost from "../../../Assets/Images/600.jpg"
import { CloseMenu } from "../Banners/FirstBanner"

function BlockImagePostPorperty(){
    return(
        <div onClick={CloseMenu} className="BlockImagePostPorperty" id="BlockImagePostPorperty">
            <div className="background" id="background">
                <p className="TextBlockImagePost1"> Vous etes propriétaire d'un bien immobilier et vous voulez le vendre ou le mettre en location?</p>
            </div>
        </div>
    )
}

export default BlockImagePostPorperty